import { ChainId, Token, WCRO } from '@pancakeswap/sdk'

export const cronosTokens = {
  wcro: WCRO[ChainId.CRONOS],
  troll: new Token(ChainId.CRONOS, '0x679f6863a653251C8C215e77205A7058b5bF676a', 9, 'TROLL', 'Troll Coin', ''),
  usdt: new Token(ChainId.CRONOS, '0x66e428c3f67a68878562e79A0234c1F83c208770', 6, 'USDT', 'Tether USD', ''),
  usdc: new Token(ChainId.CRONOS, '0xc21223249CA28397B4B6541dfFaEcC539BfF0c59', 6, 'USDC', 'USD Coin', ''),
}
