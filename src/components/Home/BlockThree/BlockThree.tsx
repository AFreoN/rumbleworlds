import { FunctionComponent } from "react";
import "./block-three.scss";
import pic_1 from "assets/home/block-3/pic-1.png";
import pic_2 from "assets/home/block-3/pic-2.png";
import pic_3 from "assets/home/block-3/pic-3.png";
// import ScrollAnimation from "react-animate-on-scroll";

interface BlockThreeProps {}

const BlockThree: FunctionComponent<BlockThreeProps> = () => {
  return (
    <div className="block-3">
      <div className="block-wrapper">
        {/* <Partners /> */}
        <div className="container mx-auto">
          <div className="row">
            <div className="col-12 col-md-5 d-flex align-items-center">
              <div className="left-col">
                {/* <ScrollAnimation
                  offset={10}
                  animateIn="animate__fadeInUp"
                  animateOnce={true}
                > */}
                <h4 className="lilita-font heading-4 text-red shadow-4">
                  CREATE
                </h4>
                <h2 className="lilita-font heading-2 text-white shadow-2">
                  BUILD YOUR OWN EXPERIENCE
                </h2>
                <p className="inter-font body-1 semibold text-white">
                  Build and play mash-ups of your favourite party games with
                  your friends. Whatever you can dream, you can build; Rumble
                  Worlds is your playground.
                  <br />
                  <br />
                  Create further utility for any individual NFT or NFT
                  collection by using the Rumble SDK to directly load into the
                  Rumble Worlds metaverse.
                  <br />
                  <br />
                  {/* Whether it's renting out your NFT or enabling game mechanics,
                  its up to your imagination! */}
                </p>
                {/* </ScrollAnimation> */}
              </div>
            </div>
            <div className="col-12 col-md-7 text-center">
              <img className="img-fluid" src={pic_3} alt="Create" />
            </div>
          </div>
          <div className="row flex-column-reverse flex-md-row">
            <div className="col-12 col-md-6 text-center">
              <img className="img-fluid" src={pic_2} alt="Market" />
            </div>
            <div className="col-12 col-md-1 text-center"></div>
            <div className="col-12 col-md-5 d-flex align-items-center">
              <div className="right-col">
                {/* <ScrollAnimation
                  offset={10}
                  animateIn="animate__fadeInUp"
                  animateOnce={true}
                > */}
                <h4 className="lilita-font heading-4 text-red shadow-4">
                  MARKET
                </h4>
                <h2 className="lilita-font heading-2 text-white shadow-2">
                  TRADE ALMOST ANYTHING
                </h2>
                <p className="inter-font body-1 semibold text-white">
                  Nearly everything in Rumble Worlds is a tokenized, tradeable
                  NFT. Characters, land, games, buildings and more; you can buy
                  and sell almost everything you see in game.
                </p>
                {/* </ScrollAnimation> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-5 d-flex align-items-center">
              <div className="left-col">
                {/* <ScrollAnimation
                  offset={200}
                  animateIn="animate__fadeInUp"
                  animateOnce={true}
                > */}
                <h4 className="lilita-font heading-4 text-red shadow-4">
                  PLAY TO EARN
                </h4>
                <h2 className="lilita-font heading-2 text-white shadow-2">
                  EARN <span className="text-yellow">$RUMB</span>
                  <br /> JUST BY PLAYING
                </h2>
                <p className="inter-font body-1 semibold text-white">
                  The gameplay economy will be driven by our utility token,
                  Rumble Coin ($RUMB). From creating and participating in games
                  to completing missions, there will be countless in-game
                  opportunity to earn!
                </p>
                {/* </ScrollAnimation> */}
              </div>
            </div>
            <div className="col-12 col-md-1 text-center"></div>
            <div className="col-12 col-md-6 text-center">
              <img className="img-fluid" src={pic_1} alt="Play to Earn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockThree;
