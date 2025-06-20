import { FunctionComponent } from "react";
import "./lore.scss";
import charactergif from "assets/mint/lore/charactergif.png";
import benefits from "assets/mint/lore/benefits.png";
import aging from "assets/mint/lore/aging.png";
import style from "assets/mint/lore/style.png";
// import ScrollAnimation from "react-animate-on-scroll";

interface MintLoreProps {}

const MintLore: FunctionComponent<MintLoreProps> = () => {
  return (
    <div className="MintLore">
      <div className="container content-container">
        {/* <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}> */}
        <h4 className="lilita-font heading-4 shadow-4 text-red">LORE</h4>
        <h2 className="lilita-font heading-2 shadow-2 text-white text-uppercase">
          MEET THE <br className="d-inline d-sm-none" /> RUMBLERS
        </h2>
        <h4 className="lilita-font heading-5 shadow-2 text-red text-uppercase mt-5">
          The Life Source
        </h4>
        <p className="body-1 semibold text-white">
          Following their of discovery Rumble Worlds in 2009 the explorers were
          keen to find out how the worlds existed without a sun, what would be
          their energy source? How was all of it kept under a stable
          equilibrium? <br /> <br />
          At the start, none of it was really clear, all they would see are
          beautiful landscapes, and these little creatures called Rumblers who
          seemed native to these worlds.
          <br />
          <br />
          However, as they found more and more worlds, they found that in worlds
          where there were hardly any Rumblers, the ecosystems seemed unhealthy
          and toxic, while the ones with more Rumblers seemed utopic and
          magical. Over time the explorers pieced together that the Rumblers
          were the actual life source of Rumble Worlds.
          {/* <br />
          <br />
          Disclaimer: In their baby forms, they are extremely fragile and kinda
          pathetic... Do not, use them in harmful activities until they grow-up,
          unless you want them to explode! Do not open the incubators too early,
          unless you’re looking to destroy an entire galaxy in a supernova. */}
        </p>

        <h4 className="lilita-font heading-5 shadow-2 text-red text-uppercase mt-5">
          It's a different world out here
        </h4>
        <p className="body-1 semibold text-white">
          Rumble Worlds works very differently to any other world so far.
          <br />
          <br />
          The laws of physics and science are completely challenged to the point
          where anyone coming from the ‘traditional’ worlds will be unable to do
          basic things like growing food, constructing buildings and travelling
          between worlds.
          <br />
          <br />
          Rumblers know exactly how this world works, and the beauty of this
          world is that it changes so fast and so rapidly. The Rumblers
          naturally embrace change, uncertainty, and transformation. Their
          attitudes towards life make them better suited to operate in a world
          like RumbleWorlds which is constantly evolving and challenging the
          fundamentals of its own world.
        </p>
        {/* </ScrollAnimation> */}
        <img
          className="w-100 img-fluid"
          style={{ paddingTop: "2rem", paddingBottom: "6rem" }}
          src={charactergif}
          alt="Character"
        />
        <hr />
        <div className="row align-items-center">
          <div className="col-12 col-md-6" style={{ paddingBottom: "6rem" }}>
            {/* <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}> */}
            <div className="w-100">
              <h4 className="lilita-font heading-4 shadow-4 text-red">
                BENEFITS
              </h4>
              <div className="body-1 semibold text-white">
                Being native beings in the Rumble Worlds Metaverse does come
                with it's perks. Owning a Rumbler will give you exlcusive holder
                benefits and the more Rumblers your own the higher your chances
                are of earning specific rewards.
                <br />
                <br />
                Some of the rewards you can expect from being a holder:
                <ul>
                  <li>Travel to any world</li>
                  <li>Ability to own lands across all worlds</li>
                  <li>Native building perks</li>
                  <li>Experience bonuses</li>
                  <li>Early access and Rumbler-only events</li>
                  <li>Whitelist and discounts on buying items</li>
                  <li>Access to Rumbler-only items</li>
                  <li>and much more...</li>
                </ul>
              </div>
            </div>
            {/* </ScrollAnimation> */}
          </div>
          <div className="col-12 col-md-1"></div>
          <div className="col-12 col-md-5" style={{ paddingBottom: "6rem" }}>
            <img className="w-100 img-fluid" src={benefits} alt="Benefits" />
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-12 col-md-6" style={{ paddingBottom: "6rem" }}>
            <img className="w-100 img-fluid" src={aging} alt="Aging" />
          </div>
          <div className="col-12 col-md-1"></div>
          <div className="col-12 col-md-5" style={{ paddingBottom: "6rem" }}>
            {/* <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}> */}
            <div className="w-100" style={{ float: "right" }}>
              <h4 className="lilita-font heading-4 shadow-4 text-red">AGING</h4>
              <p className="body-1 semibold text-white">
                Rumblers, just like you and I, age and grow over time. What is
                just a embryo in an incubator today will one day hatch into a
                baby Rumbler when it's ready and over time will grow to become a
                fully grown adult Rumbler... and more? Information derived from
                S.P.R.I.G research suggests that Rumblers are capable to grow
                and evolve into further stages of life passing adulthood.
              </p>
            </div>
            {/* </ScrollAnimation> */}
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-12 col-md-6" style={{ paddingBottom: "6rem" }}>
            {/* <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}> */}
            <div className="w-100">
              <h4 className="lilita-font heading-4 shadow-4 text-red">STYLE</h4>
              <p className="body-1 semibold text-white">
                Rumblers are also known to have a sense of fashion in their own
                way. We know that they love blinging out their wardrobe with
                accessories and each of them having their unique style. You know
                what they don't love? When someone else has the same exact
                outfit as they do.
                <br />
                <br />
                Cosmetics are tokenized NFT's that can be equipped on Rumblers
                and come in different tiers based on the quality and quantity of
                each cosmetic. Tiers range from{" "}
                <span className="text-green">Common</span>,{" "}
                <span className="text-blue">Rare</span>,{" "}
                <span className="text-purple">Epic</span>,{" "}
                <span className="text-yellow">Legendary</span> and{" "}
                <span className="text-red">Mythical</span>.
                <br />
                <br />
                Each incubator minted comes with 3 bonus Genesis Collection
                cosmetics to get you started with more cosmetic collections
                coming down the road! Items from the Genesis Collection will
                never be available to be minted again.
              </p>
            </div>
            {/* </ScrollAnimation> */}
          </div>
          <div className="col-12 col-md-1"></div>
          <div className="col-12 col-md-5" style={{ paddingBottom: "6rem" }}>
            <img className="w-100 img-fluid" src={style} alt="Style" />
          </div>
        </div>

        {/* <div className="row">
          <div
            className="col-12 col-md-5"
            style={{ paddingBottom: "6rem" }}
          ></div>
          <div className="col-12 col-md-7" style={{ paddingBottom: "6rem" }}> */}
        {/* <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}> */}
        {/* <div className="w-100 " style={{ float: "right" }}>
              <h4 className="lilita-font heading-4 shadow-4 text-red">
                UTILITY
              </h4>
              <p className="body-1 semibold text-white">
                Rumblers bring around a bunch of utility to their owners. Adult
                Rumblers are generally very social beings, They love building.
                It's their favourite past time. One might even call it a "weird
                obsession". Due to this Rumblers are able to build faster on
                Rumble Worlds than other NFT collections.
              </p>
            </div> */}
        {/* </ScrollAnimation> */}
        {/* </div>
        </div> */}

        <div className="row">
          <div className="col-12 col-md-12 text-center">
            {/* <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}> */}
            <div className="w-100">
              <h4 className="lilita-font heading-4 shadow-4 text-red">
                MORE INFO AS WE UNCOVER IT. STAY TUNED!
              </h4>
            </div>
            {/* </ScrollAnimation> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MintLore;
