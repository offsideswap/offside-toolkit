import fs from "fs";
import path from "path";
import { TokenList } from "@uniswap/token-lists";
import { version as offsideswapDefaultVersion } from "../lists/offsideswap-default.json";
import { version as offsideswapExtendedVersion } from "../lists/offsideswap-extended.json";
import { version as offsideswapTop15Version } from "../lists/offsideswap-top-15.json";
import { version as offsideswapTop100Version } from "../lists/offsideswap-top-100.json";
import { version as coingeckoVersion } from "../lists/coingecko.json";
import { version as cmcVersion } from "../lists/cmc.json";
import { version as offsideswapMiniVersion } from "../lists/offsideswap-mini.json";
import { version as offsideswapMiniExtendedVersion } from "../lists/offsideswap-mini-extended.json";
import offsideswapDefault from "./tokens/offsideswap-default.json";
import offsideswapExtended from "./tokens/offsideswap-extended.json";
import offsideswapTop100 from "./tokens/offsideswap-top-100.json";
import offsideswapTop15 from "./tokens/offsideswap-top-15.json";
import coingecko from "./tokens/coingecko.json";
import cmc from "./tokens/cmc.json";
import offsideswapMini from "./tokens/offsideswap-mini.json";
import offsideswapMiniExtended from "./tokens/offsideswap-mini-extended.json";

export enum VersionBump {
  "major" = "major",
  "minor" = "minor",
  "patch" = "patch",
}

type Version = {
  major: number;
  minor: number;
  patch: number;
};

const lists = {
  "offsideswap-default": {
    list: offsideswapDefault,
    name: "OffsideSwap Default",
    keywords: ["offsideswap", "default"],
    logoURI: "https://offsideswap.finance/logo.png",
    sort: false,
    currentVersion: offsideswapDefaultVersion,
  },
  "offsideswap-extended": {
    list: offsideswapExtended,
    name: "OffsideSwap Extended",
    keywords: ["offsideswap", "extended"],
    logoURI: "https://offsideswap.finance/logo.png",
    sort: true,
    currentVersion: offsideswapExtendedVersion,
  },
  "offsideswap-top-100": {
    list: offsideswapTop100,
    name: "OffsideSwap Top 100",
    keywords: ["offsideswap", "top 100"],
    logoURI: "https://offsideswap.finance/logo.png",
    sort: true,
    currentVersion: offsideswapTop100Version,
  },
  "offsideswap-top-15": {
    list: offsideswapTop15,
    name: "OffsideSwap Top 15",
    keywords: ["offsideswap", "top 15"],
    logoURI: "https://offsideswap.finance/logo.png",
    sort: true,
    currentVersion: offsideswapTop15Version,
  },
  coingecko: {
    list: coingecko,
    name: "CoinGecko",
    keywords: ["defi"],
    logoURI:
      "https://www.coingecko.com/assets/thumbnail-007177f3eca19695592f0b8b0eabbdae282b54154e1be912285c9034ea6cbaf2.png",
    sort: true,
    currentVersion: coingeckoVersion,
  },
  cmc: {
    list: cmc,
    name: "CoinMarketCap",
    keywords: ["defi"],
    logoURI: "https://ipfs.io/ipfs/QmQAGtNJ2rSGpnP6dh6PPKNSmZL8RTZXmgFwgTdy5Nz5mx",
    sort: true,
    currentVersion: cmcVersion,
  },
  "offsideswap-mini": {
    list: offsideswapMini,
    name: "OffsideSwap Mini",
    keywords: ["offsideswap", "binance", "mini program", "mini"],
    logoURI: "https://offsideswap.finance/logo.png",
    sort: true,
    currentVersion: offsideswapMiniVersion,
  },
  "offsideswap-mini-extended": {
    list: offsideswapMiniExtended,
    name: "OffsideSwap Mini Ext",
    keywords: ["offsideswap", "binance", "mini program", "mini", "extended"],
    logoURI: "https://offsideswap.finance/logo.png",
    sort: true,
    currentVersion: offsideswapMiniExtendedVersion,
  },
};

const getNextVersion = (currentVersion: Version, versionBump?: VersionBump) => {
  const { major, minor, patch } = currentVersion;
  switch (versionBump) {
    case VersionBump.major:
      return { major: major + 1, minor, patch };
    case VersionBump.minor:
      return { major, minor: minor + 1, patch };
    case VersionBump.patch:
    default:
      return { major, minor, patch: patch + 1 };
  }
};

export const buildList = (listName: string, versionBump?: VersionBump): TokenList => {
  const { list, name, keywords, logoURI, sort, currentVersion } = lists[listName];
  const version = getNextVersion(currentVersion, versionBump);
  return {
    name,
    timestamp: new Date().toISOString(),
    version,
    logoURI,
    keywords,
    // sort them by symbol for easy readability (not applied to default list)
    tokens: sort
      ? list.sort((t1, t2) => {
          if (t1.chainId === t2.chainId) {
            // ROTO first in extended list
            if ((t1.symbol === "ROTO") !== (t2.symbol === "ROTO")) {
              return t1.symbol === "ROTO" ? -1 : 1;
            }
            return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
          }
          return t1.chainId < t2.chainId ? -1 : 1;
        })
      : list,
  };
};

export const saveList = (tokenList: TokenList, listName: string): void => {
  const tokenListPath = `${path.resolve()}/lists/${listName}.json`;
  const stringifiedList = JSON.stringify(tokenList, null, 2);
  fs.writeFileSync(tokenListPath, stringifiedList);
  console.info("Token list saved to ", tokenListPath);
};
