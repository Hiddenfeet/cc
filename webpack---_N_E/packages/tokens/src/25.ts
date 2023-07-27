import { ChainId, Token, WCRO } from '@pancakeswap/sdk'

export const cronosTokens = {
  wcro: WCRO[ChainId.CRONOS],
  troll: new Token(ChainId.CRONOS, '0x99e88527F5355c1a006FE60b42b7b1515E69fa3a', 18, 'TROLL', 'Troll Coin', ''),
  usdt: new Token(ChainId.CRONOS, '0x66e428c3f67a68878562e79A0234c1F83c208770', 6, 'USDT', 'Tether USD', ''),
  usdc: new Token(ChainId.CRONOS, '0xc21223249CA28397B4B6541dfFaEcC539BfF0c59', 6, 'USDC', 'USD Coin', ''),
}
