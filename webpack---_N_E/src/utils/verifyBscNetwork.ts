import { ChainId } from '@pancakeswap/sdk'

export const verifyBscNetwork = (chainId: number) => {
  return chainId === ChainId.CRONOS || chainId === ChainId.BSC_TESTNET
}
