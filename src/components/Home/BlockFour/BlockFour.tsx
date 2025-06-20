import { FunctionComponent } from "react";
import "./block-four.scss";
import background from "assets/home/block-4/background.png";
// import CommonButton from "components/Common/CommonButton";
// import { useNavigate } from "react-router";
import IdleCharacter from "../IdleCharacter/IdleCharacter";
// import ScrollAnimation from "react-animate-on-scroll";

interface BlockFourProps {}

const BlockFour: FunctionComponent<BlockFourProps> = () => {
  // const navigate = useNavigate();

  return (
    <div className="block-4">
      <img className="background" src={background} alt="background" />
      {/* <div className="overlay"></div> */}
      <div className="block-wrapper container mx-auto">
        <div className="row d-flex flex-column-reverse flex-md-row align-items-center">
          <div className="col-12 col-md-6 align-items-center">
            <div className="left-col">
              {/* <ScrollAnimation
                offset={10}
                animateIn="animate__fadeInUp"
                animateOnce={true}
              > */}
              <h4 className="lilita-font heading-4 text-red shadow-4">
                NFT DROP
              </h4>
              <h2 className="lilita-font heading-2 text-white shadow-2">
                THE GENESIS MINT
              </h2>
              <p className="inter-font body-1 semibold text-white">
                A native Rumble Worlds NFT collection is dropping! Serving as
                the life source of the Rumble Worlds Metaverse, these little
                Rumblers play an integral part of their ecosystem.
                <br />
                <br />
                Rumbler holders gain access to early builds, airdrops, $RUMB
                token allocations and much more...
                <br />
                <br />
                More details about who the Rumblers are, what they do, their
                significance in the ecosystem and the benefits of having your
                own Rumblers; in the ever expansive story of the Rumble Worlds
                to be revealed soon!
              </p>
              <div className="d-flex justify-content-center justify-content-md-start">
                {/* <CommonButton
                  className="rw-btn-primary medium"
                  onClick={() => navigate("/mint")}
                >
                  More info
                </CommonButton> */}
              </div>
              {/* </ScrollAnimation> */}
            </div>
          </div>
          <div
            className="col-12 col-md-6 right-col px-0 text-center"
            id="idlecharacter_model"
          >
            {/* <img
              className="img-fluid character"
              src={character}
              alt="GENESIS COLLECTION"
            /> */}
            <IdleCharacter />
            {/* <img
              className="img-fluid stand"
              src={stand}
              alt="GENESIS COLLECTION"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockFour;
