import { FunctionComponent, useRef } from "react";
import "./block-one.scss";
// import background from "assets/home/block-1/background.png";
import Planet from "components/Planet/Planet";
import CommonButton from "components/Common/CommonButton";
// import MintCountdown from "../MintCountdown/MintCountdown";
import StarryBackground from "components/Common/StarryBackground";
// import ScrollAnimation from "react-animate-on-scroll";

interface BlockOneProps {}

const BlockOne: FunctionComponent<BlockOneProps> = () => {
  const exploreRef = useRef<HTMLDivElement>(document.createElement("div"));

  const scrollToExplore = () => {
    // console.log("scroll!!!");
    exploreRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="block-1">
      {/* <img className="background" src={background} alt="background" /> */}
      <div className="background">
        <StarryBackground />
      </div>

      <div className="planet-wrapper" id="planet_model">
        <Planet />
        {/* <MintCountdown /> */}
      </div>
      <div className="block-wrapper container content-container">
        <div className="intro-block">
          <h1 className="title heading-1 text-white lilita-font shadow-2">
            Open NFT Metaverse
          </h1>
          <div className="subtitle-1 text-white inter-font semibold shadow-p">
            Rumble Worlds is a mash-up game that brings together everyone's
            favourite party games and NFT collections in an open metaverse built
            on the Solana blockchain.
          </div>
          <CommonButton
            className="rw-btn-primary medium heading-6 lean"
            onClick={scrollToExplore}
          >
            Explore
          </CommonButton>
        </div>
      </div>
      <div
        className="separator text-center d-flex align-items-center pb-5"
        ref={exploreRef}
      >
        <div className="text-wrapper">
          {/* <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}> */}
          <h4 className="lilita-font heading-4 text-red shadow-4">EXPLORE</h4>
          <h2 className="lilita-font heading-2 text-white shadow-2">
            DISCOVER THE METAVERSE
          </h2>
          <p className="body-1 inter-font semibold text-white shadow-p">
            In the year 2009, a team of explorers accidentally discovered
            RumbleWorlds.
            <br />
            <br className="d-md-none " />
            A collective of strange but beautiful worlds in the middle of
            no-where. Strange because there was no star to be seen anywhere. No
            singular source of energy or host to revolve around, but they all
            seemed to cluster together and thrive as one ecosystem. Truly
            magical.
            <br />
            <br />
            Welcome to Rumble Worlds - a free-to-play, play-to-earn open
            metaverse. It's a home for all of your favourite NFTs where you can
            explore, build and customize your own experience. Travel across
            player-owned NFT lands, host events and dive into player-built games
            for endless, community-built fun!"
          </p>
          {/* </ScrollAnimation> */}
        </div>
      </div>
    </div>
  );
};

export default BlockOne;
