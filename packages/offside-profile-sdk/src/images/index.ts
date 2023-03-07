// Common

import bunnyPlaceholder from "./bunny-placeholder.svg";

// Achievements

import easterChampionBronze from "./achievements/easter-champion-bronze.svg";
import easterChampionGold from "./achievements/easter-champion-gold.svg";
import easterChampionSilver from "./achievements/easter-champion-silver.svg";

import easterParticipantBronze from "./achievements/easter-participant-bronze.svg";
import easterParticipantGold from "./achievements/easter-participant-gold.svg";
import easterParticipantSilver from "./achievements/easter-participant-silver.svg";

import easterTop500Bronze from "./achievements/easter-top-500-bronze.svg";
import easterTop500Gold from "./achievements/easter-top-500-gold.svg";
import easterTop500Silver from "./achievements/easter-top-500-silver.svg";

import ifoBelt from "./achievements/ifo-belt.svg";
import ifoBlk from "./achievements/ifo-blk.svg";
import ifoBry from "./achievements/ifo-bry.svg";
import ifoDitto from "./achievements/ifo-ditto.svg";
import ifoHelmet from "./achievements/ifo-helmet.svg";
import ifoHotcross from "./achievements/ifo-hotcross.svg";
import ifoHzn from "./achievements/ifo-hzn.svg";
import ifoKalm from "./achievements/ifo-kalm.svg";
import ifoTen from "./achievements/ifo-ten.svg";
import ifoWatch from "./achievements/ifo-watch.svg";
import ifoWsote from "./achievements/ifo-wsote.svg";

// Team images

import syrupStormSm from "./teams/syrup-storm-sm.png";
import syrupStormMd from "./teams/syrup-storm-md.png";
import syrupStormLg from "./teams/syrup-storm-lg.png";
import syrupStormAlt from "./teams/syrup-storm-alt.png";
import syrupStormBg from "./teams/syrup-storm-bg.svg";

import fearsomeFlippersSm from "./teams/fearsome-flippers-sm.png";
import fearsomeFlippersMd from "./teams/fearsome-flippers-md.png";
import fearsomeFlippersLg from "./teams/fearsome-flippers-lg.png";
import fearsomeFlippersAlt from "./teams/fearsome-flippers-alt.png";
import fearsomeFlippersBg from "./teams/fearsome-flippers-bg.svg";

import chaoticRotorsSm from "./teams/chaotic-rotors-sm.png";
import chaoticRotorsMd from "./teams/chaotic-rotors-md.png";
import chaoticRotorsLg from "./teams/chaotic-rotors-lg.png";
import chaoticRotorsAlt from "./teams/chaotic-rotors-alt.png";
import chaoticRotorsBg from "./teams/chaotic-rotors-bg.svg";

interface ImageMap {
  [key: string]: string;
}

const achievementBadges: ImageMap = {
  "easter-champion-bronze.svg": easterChampionBronze,
  "easter-champion-gold.svg": easterChampionGold,
  "easter-champion-silver.svg": easterChampionSilver,
  "easter-participant-bronze.svg": easterParticipantBronze,
  "easter-participant-gold.svg": easterParticipantGold,
  "easter-participant-silver.svg": easterParticipantSilver,
  "easter-top-500-bronze.svg": easterTop500Bronze,
  "easter-top-500-gold.svg": easterTop500Gold,
  "easter-top-500-silver.svg": easterTop500Silver,
  "ifo-belt.svg": ifoBelt,
  "ifo-blk.svg": ifoBlk,
  "ifo-bry.svg": ifoBry,
  "ifo-ditto.svg": ifoDitto,
  "ifo-helmet.svg": ifoHelmet,
  "ifo-hotcross.svg": ifoHotcross,
  "ifo-hzn.svg": ifoHzn,
  "ifo-kalm.svg": ifoKalm,
  "ifo-ten.svg": ifoTen,
  "ifo-watch.svg": ifoWatch,
  "ifo-wsote.svg": ifoWsote,
  unknown: bunnyPlaceholder,
};

const teamImages: ImageMap = {
  "syrup-storm-sm.png": syrupStormSm,
  "syrup-storm-md.png": syrupStormMd,
  "syrup-storm-lg.png": syrupStormLg,
  "syrup-storm-alt.png": syrupStormAlt,
  "syrup-storm-bg.svg": syrupStormBg,
  "fearsome-flippers-sm.png": fearsomeFlippersSm,
  "fearsome-flippers-md.png": fearsomeFlippersMd,
  "fearsome-flippers-lg.png": fearsomeFlippersLg,
  "fearsome-flippers-alt.png": fearsomeFlippersAlt,
  "fearsome-flippers-bg.svg": fearsomeFlippersBg,
  "chaotic-rotors-sm.png": chaoticRotorsSm,
  "chaotic-rotors-md.png": chaoticRotorsMd,
  "chaotic-rotors-lg.png": chaoticRotorsLg,
  "chaotic-rotors-alt.png": chaoticRotorsAlt,
  "chaotic-rotors-bg.svg": chaoticRotorsBg,
};

export { achievementBadges, teamImages, bunnyPlaceholder };
