import { Database } from './server';
import { EMPTY_CONTENT_HASH, ETH_COIN_TYPE, ZERO_ADDRESS } from './utils';
import ethers from'ethers';
import { abi } from './L2Resolver.json';

// interface NameData {
//   addresses?: { [coinType: number]: string };
//   text?: { [key: string]: string };
//   contenthash?: string;
// }

export const database: Database = {
  async addr(name, coinType) {
    // If the request is for some non-ETH address, return 0x0
    if (coinType !== ETH_COIN_TYPE) {
      return { addr: ZERO_ADDRESS, ttl: 1000 };
    }

    // If the request if for an ETH address, get that from your API (or database directly or whatever)
    try {
      const addr = await fetchAddrFromL2(name, coinType) || ZERO_ADDRESS;
      return { addr, ttl: 1000 };
    } catch (error) {
      console.error('Error resolving addr', error);
      return { addr: ZERO_ADDRESS, ttl: 1000 };
    }
  },
  async text(name: string, key: string) {
    // If you don't want to use the text records I mentioned like an avatar, just return empty here too
    try {
      const value = await fetchTextFromL2(name, key) || '';
      return { value, ttl: 1000 };
    } catch (error) {
      console.error('Error resolving addr', error);
      return { value: '', ttl: 1000 };
    }
  },
  contenthash() {
    // Realistically you're not going to use this so just return empty
    return { contenthash: EMPTY_CONTENT_HASH, ttl: 1000 };
  },
};

async function fetchAddrFromL2(name: string, coinType: any): Promise<string> {
  try {
    var provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
    const address = process.env.RESOLVER_ADDRESS as string;

    const resolver = new ethers.Contract(
        address,
        abi,
        provider
    );

    const response = await resolver.getAddrRecord(name, coinType);

    console.log('response : ', name, response);
    // console.log('json : ', response.json());

    // const data = (await response.json()) as NameData;
    return response;
  } catch (err) {
    console.error('Error fetching name from L2', err);
    return '';
  }
}

async function fetchTextFromL2(name: string, key: string): Promise<string> {
  try {
    var provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
    const address = process.env.RESOLVER_ADDRESS as string;

    const resolver = new ethers.Contract(
        address,
        abi,
        provider
    );

    const response = await resolver.getTextRecord(name, key);

    console.log('response : ', name, response);
    //console.log('json : ', response.json());

    return response;
  } catch (err) {
    console.error('Error fetching text from L2', err);
    return '';
  }
}


// async function fetchOffchainName(name: string): Promise<NameData> {
//   try {
//     const response = await fetch(
//       `https://ens-gateway.gregskril.workers.dev/get/${name}`
//     );

//     const data = (await response.json()) as NameData;
//     return data;
//   } catch (err) {
//     console.error('Error fetching offchain name', err);
//     return {};
//   }
// }
