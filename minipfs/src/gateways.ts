import { HTTPS_URI, IPFS_PATH, IPNS_PATH } from './types'
export const PINATA_GATEWAY: HTTPS_URI = 'https://gateway.pinata.cloud'

// LIST: https://ipfs.github.io/public-gateway-checker/
export type IPFSProviders =
  | 'pinata'
  | 'cloudflare'
  | 'ipfs'
  | 'dweb'
  | 'kodadot'
  | 'rmrk'
  | 'fleek'
  | 'nftstorage'
  | 'aragon'
  | 'cf'
  | 'infura'
  | 'gateway'

export type AvailableProviders = IPFSProviders[]

export const ipfsProviders: Record<IPFSProviders, HTTPS_URI> = {
  pinata: 'https://kodadot.mypinata.cloud',
  cloudflare: 'https://cloudflare-ipfs.com',
  ipfs: 'https://ipfs.io',
  dweb: 'https://dweb.link',
  kodadot: 'https://kodadot.mypinata.cloud',
  rmrk: 'https://rmrk.mypinata.cloud',
  fleek: 'https://ipfs.fleek.co',
  nftstorage: 'https://nftstorage.link',
  aragon: 'https://ipfs.eth.aragon.network',
  cf: 'https://cf-ipfs.com',
  infura: 'https://infura-ipfs.io',
  gateway: 'https://ipfs-gateway.cloud'
}

const DEFAULT_PROVIDER_LIST: AvailableProviders = [
  'nftstorage',
  'kodadot',
  'cloudflare'
]

export const getProviderList = (
  providers: AvailableProviders = DEFAULT_PROVIDER_LIST
): HTTPS_URI[] => {
  const list: AvailableProviders = providers.length
    ? providers
    : DEFAULT_PROVIDER_LIST
  return list.map(provider => ipfsProviders[provider])
}

export const getProperURI = (uri: IPFS_PATH | IPNS_PATH, providers: AvailableProviders = []): HTTPS_URI[] => {
  const providerList = getProviderList(providers)
  return providerList.map<HTTPS_URI>(provider => `${provider}${uri}`)
}

export const getGatewayURI = (uri: IPFS_PATH | IPNS_PATH) => (provider: IPFSProviders): HTTPS_URI => {
  return `${ipfsProviders[provider]}${uri}`
}