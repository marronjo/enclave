import * as util from 'viem/utils';

export const fhenixHelium = /*#__PURE__*/ util.defineChain({
  id: 8_008_135,
  name: 'Fhenix Helium',
  nativeCurrency: {
    decimals: 18,
    name: 't FHE',
    symbol: 'tFHE',
  },
  rpcUrls: {
    default: {
      name: 'Helium Block Explorer',
      http: ['https://api.helium.fhenix.zone/'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Fhenix Helium Chain Explorer',
      url: 'https://explorer.helium.fhenix.zone',
    },
  },
  testnet: true
})
