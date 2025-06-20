import { FunctionComponent } from "react";
import "./backpack.scss";
import background from "assets/mint/backpack/background.png";
import CommonButton from "components/Common/CommonButton";
// import ScrollAnimation from "react-animate-on-scroll";

interface MintBackpackProps {}

const MintBackpack: FunctionComponent<MintBackpackProps> = () => {
  return (
    <div className="MintBackpack text-center">
      <img className="w-100 background" src={background} alt="Backpack" />
      <div className="block-wrapper container">
        <div className="col-12 col-md-8 mx-auto d-flex flex-column justify-content-center">
          {/* <ScrollAnimation
            animateIn="animate__fadeInUp"
            offset={10}
            animateOnce={true}
          > */}
          <h3 className="lilita-font heading-3 shadow-3 text-white text-uppercase">
            Your Rumblepack
          </h3>
          <p className="body-1 text-white semibold shadow-p">
            Rumblers, Rumbler Incubators, Spin wheel tokens and all Rumble
            Worlds items you own in the Rumble Worlds Metaverse is kept in your
            Rumblepack. The Rumblepack provides you an easy way to check and
            manage your items without having to open up wallets or log into the
            game. Rumblepack and all it's features launching soon ;)
          </p>
          <CommonButton className="rw-btn-primary medium mx-auto mt-3" disabled>
            Coming Soon
          </CommonButton>
          {/* </ScrollAnimation> */}
        </div>
      </div>
    </div>
  );
};

export default MintBackpack;
