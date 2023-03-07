import addresses from "../constants/contracts";
import { MAINNET_CHAIN_ID, TESTNET_CHAIN_ID } from "../constants/common";
import { getOffsideProfileAddress } from "./addressHelpers";

describe("addressHelpers", () => {
  it("getAddress returns correct mainnet address", () => {
    const profileAddress = getOffsideProfileAddress(MAINNET_CHAIN_ID);
    expect(profileAddress).toBe(addresses.offsideProfile[MAINNET_CHAIN_ID]);
  });
  it("getAddress returns correct testnet address", () => {
    const profileAddress = getOffsideProfileAddress(TESTNET_CHAIN_ID);
    expect(profileAddress).toBe(addresses.offsideProfile[TESTNET_CHAIN_ID]);
  });
});
