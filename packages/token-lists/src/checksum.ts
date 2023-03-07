import fs from "fs";
import path from "path";
import { getAddress } from "@ethersproject/address";
import offsideswapDefault from "./tokens/offsideswap-default.json";
import offsideswapExtended from "./tokens/offsideswap-extended.json";
import offsideswapTop100 from "./tokens/offsideswap-top-100.json";
import offsideswapTop15 from "./tokens/offsideswap-top-15.json";
import coingecko from "./tokens/coingecko.json";
import cmc from "./tokens/cmc.json";
import offsideswapMini from "./tokens/offsideswap-mini.json";
import offsideswapMiniExtended from "./tokens/offsideswap-mini-extended.json";

const lists = {
  "offsideswap-default": offsideswapDefault,
  "offsideswap-extended": offsideswapExtended,
  "offsideswap-top-100": offsideswapTop100,
  "offsideswap-top-15": offsideswapTop15,
  coingecko,
  cmc,
  "offsideswap-mini": offsideswapMini,
  "offsideswap-mini-extended": offsideswapMiniExtended,
};

const checksumAddresses = (listName: string): void => {
  let badChecksumCount = 0;
  const listToChecksum = lists[listName];
  const updatedList = listToChecksum.reduce((tokenList, token) => {
    const checksummedAddress = getAddress(token.address);
    if (checksummedAddress !== token.address) {
      badChecksumCount += 1;
      const updatedToken = { ...token, address: checksummedAddress };
      return [...tokenList, updatedToken];
    }
    return [...tokenList, token];
  }, []);

  if (badChecksumCount > 0) {
    console.info(`Found and fixed ${badChecksumCount} non-checksummed addreses`);
    const tokenListPath = `${path.resolve()}/src/tokens/${listName}.json`;
    console.info("Saving updated list to ", tokenListPath);
    const stringifiedList = JSON.stringify(updatedList, null, 2);
    fs.writeFileSync(tokenListPath, stringifiedList);
    console.info("Checksumming done!");
  } else {
    console.info("All addresses are already checksummed");
  }
};

export default checksumAddresses;
