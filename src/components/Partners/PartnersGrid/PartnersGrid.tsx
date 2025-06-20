import { FunctionComponent } from "react";
import Partner from "components/Partners/Partner/Partner";
import "./PartnersGrid.scss";
import sampleImage from "assets/partners/grey.png";

import solarians from "assets/partners/list/solarians.jpg";
// import solanaMonkeyBusiness from "assets/partners/list/solanaMonkeyBusiness.png";
// import degenApes from "assets/partners/list/degenApes.jpg";
import skeletonCrew from "assets/partners/list/skeletonCrew.jpg";
import boneWorld from "assets/partners/list/boneWorld.jpg";
import solArmy from "assets/partners/list/solArmy.jpg";
import jellyBeasts from "assets/partners/list/jellyBeasts.jpg";
import surgingBulls from "assets/partners/list/surgingBulls.png";
import inverseBear from "assets/partners/list/inverseBear.jpg";
import grimSyndicate from "assets/partners/list/grimSyndicate.jpg";
import rogueSharks from "assets/partners/list/rogueSharks.jpg";
import soliens from "assets/partners/list/soliens.jpg";
import forgeBots from "assets/partners/list/forgeBots.jpg";
import elysia from "assets/partners/list/elysia.jpg";
import legionPunks from "assets/partners/list/legionPunks.jpg";
import sunks from "assets/partners/list/sunks.jpg";
import hellions from "assets/partners/list/hellions.jpg";
import solTeamSix from "assets/partners/list/solTeamSix.jpg";
import asguardArmy from "assets/partners/list/asguardArmy.jpg";
import fancyFrencies from "assets/partners/list/fancyFrenchies.jpg";
import bitBoat from "assets/partners/list/bitBoat.jpg";
import layzRobots from "assets/partners/list/lazyRobots.jpg";
import boredBunnies from "assets/partners/list/boredBunny.jpg";
import drippyPenguins from "assets/partners/list/drippyPenguins.jpg";
import fennecsFoxes from "assets/partners/list/fennecsFoxes.jpg";
import soulless from "assets/partners/list/soulless.jpg";
import gnarlyGnomies from "assets/partners/list/gnarlyGnomes.jpg";
import Million from "assets/partners/list/65Million.jpg";
import nastyBoys from "assets/partners/list/nastyBoys.jpg";
import battleBoys from "assets/partners/list/battleBois.png";
import skullDivision from "assets/partners/list/skullDivision.jpg";
import pengos from "assets/partners/list/pengos.jpg";
import chillElephantsClub from "assets/partners/list/chillElephantsClub.jpg";
import thirstyCactus from "assets/partners/list/thirstyCactus.png";
import groundZero from "assets/partners/list/groundZero.jpg";
import solanaGekoBusiness from "assets/partners/list/solanaGekoBusiness.jpg";
import cybercityzens from "assets/partners/list/cyberCityzens.jpg";
import lazyHeroes from "assets/partners/list/lazyHeroes.jpg";
import mangoHeroes from "assets/partners/list/mangoHeroes.jpg";
import degenKartClub from "assets/partners/list/degenKartClub.jpg";
import solMees from "assets/partners/list/solMees.jpg";
// import miniBots from "assets/partners/list/miniBots.jpg";
import jungleCats from "assets/partners/list/jungleCats.jpg";
import ordinarySol from "assets/partners/list/ordinarySol.jpg";
import dhevas from "assets/partners/list/dhevas.jpg";
import battleDrones from "assets/partners/list/battleDrones.jpg";
import magicSolanaShit from "assets/partners/list/magicSolanaShit.jpg";
// import zombieFrogs from "assets/partners/list/zombieFrogs.jpg";
import sollessArt from "assets/partners/list/sollessArt.jpg";
import solanaSurfers from "assets/partners/list/solanaSurfers.jpg";
import defiHood from "assets/partners/list/defiHood.jpg";
import autonomousScoopShop from "assets/partners/list/atonomousScoop.jpg";
import decentralizedDuckDen from "assets/partners/list/decentralizedDuckDen.jpg";
import goatsGang from "assets/partners/list/goatsGang.jpg";
import solTurtle from "assets/partners/list/solTurtle.jpg";
import heroNFT from "assets/partners/list/heroNFT.jpg";
import flunkDonkeys from "assets/partners/list/flunkDonkey.jpg";
import pupFilthy from "assets/partners/list/pupFilthy.jpg";
import goldiesNFT from "assets/partners/list/goldiesNFT.jpg";
import solOwl from "assets/partners/list/solOwl.jpg";
import bountyHunter from "assets/partners/list/bountyHunter.jpg";
import stealthNinjas from "assets/partners/list/stealthNinjas.jpg";
import metaSmoothBrainClub from "assets/partners/list/metaSmoothBrainClub.jpg";
import solGang from "assets/partners/list/solGang.jpg";
import solamanders from "assets/partners/list/solamanders.jpg";
// import innSanta from "assets/partners/list/innSanta.jpg";
import badCreature from "assets/partners/list/badCreature.jpg";
import cyberFrogs from "assets/partners/list/cyberFrogs.png";
import piggySol from "assets/partners/list/piggySol.jpg";
import apeWatch from "assets/partners/list/apeWatch.jpg";
import sealz from "assets/partners/list/sealz.jpg";
import solStars from "assets/partners/list/solStars.jpg";
import psyShrooms from "assets/partners/list/psyShrooms.jpg";
import livingDeadTed from "assets/partners/list/livingDeadTeds.jpg";
import solShades from "assets/partners/list/solShades.jpg";
import toastyTurts from "assets/partners/list/toastyTurts.jpg";
import undeadSol from "assets/partners/list/undeadSols.png";
import foxtopia from "assets/partners/list/foxtopia.jpg";
import wiseCats from "assets/partners/list/wiseCats.jpg";
// import thugNerdz from "assets/partners/list/thugNerdz.jpg";

interface PartnersGridProps {}

const PartnersGrid: FunctionComponent<PartnersGridProps> = () => {
  const partners = [
    {
      name: "Solarians",
      image: solarians,
      discordUrl: "https://discord.gg/solarians",
      twitterUrl: "https://twitter.com/solariansnft",
    },
    // {
    //   name: "Solana Monkey Business",
    //   image: solanaMonkeyBusiness,
    //   discordUrl: "https://discord.com/invite/solanamonkey",
    //   twitterUrl: "https://twitter.com/SolanaMBS",
    // },
    // {
    //   name: "Degenerate Ape Academy",
    //   image: degenApes,
    //   discordUrl: "http://discord.gg/degenapeacademy",
    //   twitterUrl: "https://twitter.com/DegenApeAcademy",
    // },
    {
      name: "SolArmy",
      image: solArmy,
      discordUrl: "https://discord.gg/solarmy",
      twitterUrl: "https://twitter.com/TheSolarmy",
    },
    {
      name: "Sunks",
      image: sunks,
      discordUrl: "http://dsc.gg/sunks",
      twitterUrl: "https://twitter.com/Sunks_at_Solana",
    },
    {
      name: "Pengos",
      image: pengos,
      discordUrl: "https://discord.gg/F93NhQv9pf",
      twitterUrl: "https://twitter.com/PengosNFT",
    },
    {
      name: "Skeleton Crew",
      image: skeletonCrew,
      discordUrl: "https://discord.gg/skeletoncrewrip",
      twitterUrl: "https://twitter.com/skeletoncrewrip",
    },
    {
      name: "Boneworld",
      image: boneWorld,
      discordUrl: "https://discord.gg/boneworld",
      twitterUrl: "https://www.twitter.com/boneworld_sol",
    },
    {
      name: "Jelly Beasts",
      image: jellyBeasts,
      discordUrl: "https://discord.com/invite/gMYMzdCBUY",
      twitterUrl: "https://twitter.com/JellyBeasts_Sol",
    },
    {
      name: "Surging Bulls",
      image: surgingBulls,
      discordUrl: "https://discord.com/invite/surgingbulls",
      twitterUrl: "https://twitter.com/SurgingBulls",
    },
    {
      name: "Inverse Bears",
      image: inverseBear,
      discordUrl: "https://discord.gg/inversebear",
      twitterUrl: "https://twitter.com/InverseBearNFT",
    },
    {
      name: "Grim Syndicate",
      image: grimSyndicate,
      discordUrl: "https://discord.gg/xeHPSUhUv7",
      twitterUrl: "https://twitter.com/Grim__Syndicate",
    },
    {
      name: "Rogue Sharks",
      image: rogueSharks,
      discordUrl: "https://discord.gg/roguesharks",
      twitterUrl: "https://twitter.com/RogueSharks",
    },
    {
      name: "Soliens",
      image: soliens,
      discordUrl: "https://discord.com/invite/RzBqCYxuGy",
      twitterUrl: "https://twitter.com/SoliensNFT",
    },
    {
      name: "City of Elysia",
      image: elysia,
      discordUrl: "https://discord.gg/elysiacity",
      twitterUrl: "https://twitter.com/cityofelysia",
    },
    {
      name: "Legion Punks",
      image: legionPunks,
      discordUrl: "http://discord.gg/pmQs54DMS2",
      twitterUrl: "https://twitter.com/legionpunks",
    },
    {
      name: "Hellions",
      image: hellions,
      discordUrl: "https://discord.gg/WtQBQ5xajR",
      twitterUrl: "https://twitter.com/theHellionsNFT",
    },
    {
      name: "Sol Team Six",
      image: solTeamSix,
      discordUrl: "https://discord.gg/sTWdnq64",
      twitterUrl: "https://twitter.com/solteamsix",
    },
    {
      name: "Asgard Army",
      image: asguardArmy,
      discordUrl: "https://discord.com/invite/asgardarmy",
      twitterUrl: "https://twitter.com/AsgardArmy",
    },
    {
      name: "Fancy Frenchies",
      image: fancyFrencies,
      discordUrl: "https://discord.com/invite/bGHkb6YagU",
      twitterUrl: "https://twitter.com/fancyfrenchnft",
    },
    {
      name: "BitBoat",
      image: bitBoat,
      discordUrl: "https://discord.gg/G67mZWGer5",
      twitterUrl: "https://twitter.com/BitBoat1",
    },
    {
      name: "LayZ Bots",
      image: layzRobots,
      discordUrl: "https://discord.com/invite/vSbxrjcDyb",
      twitterUrl: "https://twitter.com/layzrobots",
    },
    {
      name: "Bored Bunnies",
      image: boredBunnies,
      discordUrl: "https://discord.gg/boredbunny",
      twitterUrl: "https://twitter.com/BoredBunnyNFT",
    },
    {
      name: "Drippy Penguins",
      image: drippyPenguins,
      discordUrl: "https://discord.com/invite/BpkThMK7pT",
      twitterUrl: "https://twitter.com/drippypenguins",
    },
    {
      name: "Foxy Fennecs Gang",
      image: fennecsFoxes,
      discordUrl: "https://discord.com/invite/TcCjm7ffhn",
      twitterUrl: "https://twitter.com/FennecsFoxy",
    },
    {
      name: "Soulless",
      image: soulless,
      discordUrl: "https://discord.gg/soullessnft",
      twitterUrl: "https://twitter.com/soullessnft",
    },
    {
      name: "Gnarly Gnomies",
      image: gnarlyGnomies,
      discordUrl: "https://discord.com/invite/CFgTvwDEHf",
      twitterUrl: "https://twitter.com/GnarlyGnomies",
    },
    {
      name: "65 Milli◎n Years",
      image: Million,
      discordUrl: "https://discord.gg/NpXwsebsMk",
      twitterUrl: "https://twitter.com/65millionyears_",
    },
    {
      name: "Nasty boys",
      image: nastyBoys,
      discordUrl: "https://discord.com/invite/rbfxWDCyyz",
      twitterUrl: "https://twitter.com/NastyBoysNFT",
    },
    {
      name: "Battle Bois",
      image: battleBoys,
      twitterUrl: "https://twitter.com/battle_bois",
    },
    {
      name: "Skull Division",
      image: skullDivision,
      discordUrl: "https://discord.gg/skulldiv",
      twitterUrl: "https://twitter.com/SkullDiv",
    },
    {
      name: "The Chill Elephants Club",
      image: chillElephantsClub,
      discordUrl: "https://discord.gg/mMJgazXnMA",
      twitterUrl: "https://twitter.com/ChillElephants",
    },
    {
      name: "Thirsty Cactus Garden Party ",
      image: thirstyCactus,
      discordUrl: "https://discord.gg/ZF87v9FWyN",
      twitterUrl: "https://twitter.com/ThirstyCactusGP",
    },
    {
      name: "Ground Zero Metasociety",
      image: groundZero,
      discordUrl: "https://discord.gg/gURpYSxnpq",
      twitterUrl: "https://twitter.com/GroundZeroMS",
    },
    {
      name: "Solana Gecko Business",
      image: solanaGekoBusiness,
      discordUrl: "https://discord.com/invite/TH7WABkyaQ",
      twitterUrl: "https://twitter.com/SolanaGBS",
    },
    {
      name: "Cyber Cityzens Space Club",
      image: cybercityzens,
      discordUrl: "https://discord.com/invite/uYhfgZVA7P",
      twitterUrl: "https://twitter.com/cybercityzenssc",
    },
    {
      name: "Lazy Heroes",
      image: lazyHeroes,
      discordUrl: "https://discord.gg/lazyheroes",
      twitterUrl: "https://twitter.com/LazyHeroesNFT",
    },
    {
      name: "Mango Heroes",
      image: mangoHeroes,
      discordUrl: "https://discord.gg/yTAWFZVWtG",
      twitterUrl: "https://twitter.com/MangoHeroes",
    },
    {
      name: "Degen Kart Club",
      image: degenKartClub,
      discordUrl: "https://discord.gg/CJu6WbmRPr",
      twitterUrl: "https://twitter.com/degenkart_club",
    },
    {
      name: "ForgeBots",
      image: forgeBots,
      discordUrl: "https://discord.gg/nZmwCFbtC2",
      twitterUrl: "https://twitter.com/forgebots",
    },
    {
      name: "Solana Mees",
      image: solMees,
      discordUrl: "https://discord.gg/hHQEFqnxSF",
      twitterUrl: "https://twitter.com/SolanaMees",
    },

    {
      name: "Jungle Cats",
      image: jungleCats,
      discordUrl: "https://discord.gg/junglecats",
      twitterUrl: "http://twitter.com/junglecatsio",
    },
    {
      name: "Ordinary Sol",
      image: ordinarySol,
      discordUrl: "https://discord.com/invite/CwXY6juw9X",
      twitterUrl: "https://twitter.com/ordinary_sol",
    },
    {
      name: "Dhevas",
      image: dhevas,
      discordUrl: "https://discord.gg/eUWSqgp3mH",
      twitterUrl: "https://twitter.com/swans_lab",
    },
    {
      name: "Battle Drones",
      image: battleDrones,
      discordUrl: "https://discord.gg/jRz63Dsa3p",
      twitterUrl: "https://twitter.com/BattleDronesNFT",
    },
    {
      name: "Magic Solana Shit",
      image: magicSolanaShit,
      discordUrl: "http://dsc.gg/magicsolanashit",
      twitterUrl: "https://twitter.com/magicsolanashit",
    },
    {
      name: "Solless Art",
      image: sollessArt,
      discordUrl: "https://discord.com/invite/w28eEHyW",
      twitterUrl: "https://www.twitter.com/sollessart",
    },
    {
      name: "Solana Surfers",
      image: solanaSurfers,
      discordUrl: "https://www.discord.gg/uPUFfcfG2S",
      twitterUrl: "https://twitter.com/SolanaSurfers",
    },
    {
      name: "DeFi Hood",
      image: defiHood,
      discordUrl: "https://discord.gg/solarians",
      twitterUrl: "https://twitter.com/solariansnft",
    },
    {
      name: "Autonomous Scoop Shop",
      image: autonomousScoopShop,
      discordUrl: "https://discord.gg/kTmhStmCK4",
      twitterUrl: "https://twitter.com/ScoopShopNFT",
    },
    {
      name: "Decentralized Duck Den",
      image: decentralizedDuckDen,
      discordUrl: "https://discord.com/invite/QKkhykVDpA",
      twitterUrl: "https://twitter.com/DuckDenNFT",
    },
    {
      name: "Goats Gang",
      image: goatsGang,
      discordUrl: "https://discord.com/invite/cYM6MA2PpN",
      twitterUrl: "https://twitter.com/GoatsSolana",
    },
    {
      name: "Sol Turtle",
      image: solTurtle,
      discordUrl: "https://discord.gg/yzCTnj7XD3",
      twitterUrl: "https://twitter.com/SolturtleNFT",
    },
    {
      name: "Hero NFT",
      image: heroNFT,
      discordUrl: "https://discord.com/invite/heronft",
      twitterUrl: "https://twitter.com/hero_nft_",
    },
    {
      name: "Flunk Donkeys",
      image: flunkDonkeys,
      discordUrl: "https://discord.gg/PcGyhGxguZ",
      twitterUrl: "https://twitter.com/FlunkDonkeys",
    },
    {
      name: "Pup Filthy",
      image: pupFilthy,
      discordUrl: "https://discord.com/invite/t9JAz6VJpt",
      twitterUrl: "https://twitter.com/pupfilthy",
    },
    {
      name: "Goldies NFT",
      image: goldiesNFT,
      twitterUrl: "https://twitter.com/GoldiesNFT",
    },
    {
      name: "Sol Owl",
      image: solOwl,
      discordUrl: "https://discord.gg/WXFvQ4kSFY",
      twitterUrl: "https://twitter.com/owlsofsol",
    },
    {
      name: "Bounty Hunter Space Guild",
      image: bountyHunter,
      discordUrl: "https://discord.gg/YPDJGKWMNX",
      twitterUrl: "https://twitter.com/BountyHunterNFT",
    },
    {
      name: "Stealth Ninjas",
      image: stealthNinjas,
      discordUrl: "https://discord.gg/stealthnft",
      twitterUrl: "https://twitter.com/stealthnft",
    },
    {
      name: "Meta Smooth Brain Club",
      image: metaSmoothBrainClub,
      twitterUrl: "https://twitter.com/metasmoothbrain",
    },
    {
      name: "Solgang",
      image: solGang,
      discordUrl: "https://discord.com/invite/pme3NSTUEj",
      twitterUrl: "https://twitter.com/ShibaSolGang",
    },
    {
      name: "Solamanders",
      image: solamanders,
      discordUrl: "https://discord.gg/Tj9PsX5Tsc",
      twitterUrl: "https://twitter.com/SolamandersNFT",
    },

    {
      name: "Bad Creature Society",
      image: badCreature,
      discordUrl: "https://discord.gg/xHZUyUftDx",
      twitterUrl: "https://twitter.com/badcreatureSOC",
    },
    {
      name: "Cyber Frogs",
      image: cyberFrogs,
      discordUrl: "https://discord.gg/EkTxRBwHGF",
      twitterUrl: "https://twitter.com/CyberFrogsNFT",
    },
    {
      name: "Piggy Sol Gang",
      image: piggySol,
      discordUrl: "https://discord.com/invite/QyUHFsZnuJ",
      twitterUrl: "https://twitter.com/PiggySolGang",
    },
    {
      name: "Ape Watch Club",
      image: apeWatch,
      discordUrl: "https://discord.com/invite/hHTHyVaAuZ",
      twitterUrl: "https://twitter.com/APEWATCHCLUB",
    },
    {
      name: "Sealz",
      image: sealz,
      discordUrl: "https://discord.com/invite/ygb6fsP5vs",
      twitterUrl: "https://twitter.com/sealzdao",
    },
    {
      name: "Solstars",
      image: solStars,
      discordUrl: "https://discord.com/invite/799TTmpUNx",
      twitterUrl: "https://twitter.com/SolStars_NFT",
    },
    {
      name: "Psy Shrooms",
      image: psyShrooms,
      discordUrl: "https://discord.com/invite/7n4qukVU6z",
      twitterUrl: "https://twitter.com/psyshroomsnft",
    },
    {
      name: "Living Dead Teds",
      image: livingDeadTed,
      discordUrl: "https://discord.com/invite/AFJDzKuuRy",
      twitterUrl: "https://twitter.com/LivingDeadTeds",
    },
    {
      name: "Sol Shades",
      image: solShades,
      discordUrl: "https://discord.com/invite/wPgZGDKa",
      twitterUrl: "https://twitter.com/sol_shades_",
    },
    {
      name: "Toasty Turts",
      image: toastyTurts,
      discordUrl: "https://discord.com/invite/XEtRYWxWc3",
      twitterUrl: "https://twitter.com/ToastyTurts",
    },
    {
      name: "Undead Sols",
      image: undeadSol,
      discordUrl: "https://discord.gg/5bZZFBTTqE",
      twitterUrl: "https://www.twitter.com/undeadsols",
    },
    {
      name: "Foxtopia",
      image: foxtopia,
      discordUrl: "https://discord.gg/foxtopia",
      twitterUrl: "https://twitter.com/FoxtopiaNFT",
    },
    {
      name: "Wise Cats",
      image: wiseCats,
      discordUrl: "https://discord.com/invite/wisecats",
      twitterUrl: "https://twitter.com/WiseCatsNFT",
    },
    {
      name: "Minibots Community",
      image: sampleImage,
      discordUrl: "https://discord.gg/J2XtYQ3r7Y",
      twitterUrl: "https://twitter.com/minibotsNFT",
    },
    {
      name: "Innsanta",
      image: sampleImage,
      discordUrl: "https://discord.gg/qTcsgVjK",
      twitterUrl: "https://twitter.com/InnSantaNFT",
    },
    {
      name: "Zombie Frogs",
      image: sampleImage,
    },
    {
      name: "Thug Nerdz",
      image: sampleImage,
    },
  ];

  return (
    <div
      className="partners-grid"
      style={{
        paddingBottom: "10rem",
      }}
    >
      {partners.map((partner, i) => (
        <Partner {...partner} key={i} />
      ))}
    </div>
  );
};

export default PartnersGrid;
