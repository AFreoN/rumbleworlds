import { FunctionComponent } from "react";
// import background from "assets/mint/rarity/background.png";
import board from "assets/mint/rarity/board.png";
import "./rarity.scss";
import StarryBackground from "components/Common/StarryBackground";

interface MintRarityProps {}

const MintRarity: FunctionComponent<MintRarityProps> = () => {
  return (
    <div className="MintRarity">
      {/* <img className="background" src={background} alt="Background" /> */}
      <StarryBackground />
      <div className="block-wrapper text-center">
        <div className="board">
          <img src={board} alt="Board" />
          <div className="text-wrapper">
            <h4 className="lilita-font text-red heading-4 shadow-4">
              RARITY CHART
            </h4>
            <h2 className="lilita-font heading-3 shadow-2 text-white">
              COMING SOON!
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MintRarity;
