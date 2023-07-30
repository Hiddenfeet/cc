/* eslint-disable prefer-destructuring */
/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
import { getAddress } from '@ethersproject/address'
import { Chain, ConnectorNotFoundError, ResourceUnavailableError, RpcError, UserRejectedRequestError } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { Ethereum, SwitchChainNotSupportedError } from '@wagmi/core'
import { DeFiWeb3Connector } from '@deficonnect/web3-connector'
import { hexValue } from '@ethersproject/bytes'

declare global {
  interface Window {
    CronosChain?: {
      cronosSign?: (address: string, message: string) => Promise<{ publicKey: string; signature: string }>
      switchNetwork?: (networkId: string) => Promise<string>
    } & Ethereum
  }
}

export class DefiWalletConnector extends InjectedConnector {
  readonly id = 'cronos'

  readonly ready = typeof window !== 'undefined' && !!window.CronosChain

  provider?: any

  getWeb3Provider?: any

  constructor({ chains }: { chains?: Chain[] }) {
    const options = {
      name: 'Cronos',
      shimDisconnect: false,
      shimChainChangedDisconnect: false,
    }
    super({
      chains,
      options,
    })
  }

  async connect({ chainId }: { chainId?: number } = {}) {
    const connector = new DeFiWeb3Connector({
      supportedChainIds: [25],
      appName: 'Trollcoin',
      chainType: 'eth', // only support 'eth' for DeFiWeb3Connector
      chainId: '25', // for eth is 1
      rpcUrls: {
        1: 'https://mainnet.infura.io/v3/INFURA_API_KEY',
        25: 'https://evm-cronos.crypto.org/',
      },
    })

    try {
      await connector.activate()
      const provider = await connector.getProvider()
      if (!provider) throw new ConnectorNotFoundError()

      if (provider.on) {
        provider.on('accountsChanged', this.onAccountsChanged)
        provider.on('chainChanged', this.onChainChanged)
        provider.on('disconnect', this.onDisconnect)
      }

      this.emit('message', { type: 'connecting' })

      const account = await connector.getAccount()
      let id = parseInt((await connector.getChainId()) as string, 16)
      // Switch to chain if provided
      let unsupported = this.isChainUnsupported(id)
      if (chainId && id !== chainId) {
        const chain = await this.switchChain(chainId)
        id = chain.id
        unsupported = this.isChainUnsupported(id)
      }

      return { account, chain: { id, unsupported }, provider }
    } catch (error) {
      if (this.isUserRejectedRequestError(error)) throw new UserRejectedRequestError(error)
      if ((<RpcError>error).code === -32002) throw new ResourceUnavailableError(error)
      throw error
    }
  }

  async getAccount() {
    const connector = new DeFiWeb3Connector({
      supportedChainIds: [25],
      appName: 'Trollcoin',
      chainType: 'eth', // only support 'eth' for DeFiWeb3Connector
      chainId: '25', // for eth is 1
      rpcUrls: {
        1: 'https://mainnet.infura.io/v3/INFURA_API_KEY',
        25: 'https://evm-cronos.crypto.org/',
      },
    })
    const provider = await connector.getProvider()
    if (!provider) throw new ConnectorNotFoundError()
    // return checksum address
    const account = await connector.getAccount()
    return getAddress(<string>account)
  }

  async getChainId(): Promise<number> {
    const connector = new DeFiWeb3Connector({
      supportedChainIds: [25],
      appName: 'Trollcoin',
      chainType: 'eth', // only support 'eth' for DeFiWeb3Connector
      chainId: '25', // for eth is 1
      rpcUrls: {
        1: 'https://mainnet.infura.io/v3/INFURA_API_KEY',
        25: 'https://evm-cronos.crypto.org/',
      },
    })
    const chainId = parseInt((await connector.getChainId()) as string, 16)
    return chainId
  }

  async getProvider() {
    if (typeof window !== 'undefined') {
      const connector = new DeFiWeb3Connector({
        supportedChainIds: [25],
        appName: 'Trollcoin',
        chainType: 'eth', // only support 'eth' for DeFiWeb3Connector
        chainId: '25', // for eth is 1
        rpcUrls: {
          1: 'https://mainnet.infura.io/v3/INFURA_API_KEY',
          25: 'https://evm-cronos.crypto.org/',
        },
      })
      // TODO: Fallback to `ethereum#initialized` event for async injection
      // https://github.com/MetaMask/detect-provider#synchronous-and-asynchronous-injection=
      this.provider = connector.getProvider()
    }
    return this.provider
  }

  async switchChain(chainId: number): Promise<Chain> {
    const connector = new DeFiWeb3Connector({
      supportedChainIds: [25],
      appName: 'Trollcoin',
      chainType: 'eth', // only support 'eth' for DeFiWeb3Connector
      chainId: '25', // for eth is 1
      rpcUrls: {
        1: 'https://mainnet.infura.io/v3/INFURA_API_KEY',
        25: 'https://evm-cronos.crypto.org/',
      },
    })
    const provider = await connector.getProvider()
    if (!provider) throw new ConnectorNotFoundError()

    const id = hexValue(chainId)

    if (id === '0x19') {
      try {
        await provider.switchNetwork(id)

        return (
          this.chains.find((x) => x.id === chainId) ?? {
            id: chainId,
            name: `Chain ${id}`,
            network: `${id}`,
            rpcUrls: { default: '' },
          }
        )
      } catch (error) {
        if ((error as any).error === 'user rejected') {
          throw new UserRejectedRequestError(error)
        }
      }
    }
    throw new SwitchChainNotSupportedError({ connector: this })
  }
}
