import { FunctionComponent } from "react";
import rumbler from "assets/home/mintcountdown/rumbler.png";
// import board from "assets/home/mintcountdown/board.png";
import CommonButton from "components/Common/CommonButton";
import "./countdown.scss";
import { useNavigate } from "react-router";
import Countdown from "react-countdown";

interface MintCountdownProps {}

const MintCountdown: FunctionComponent<MintCountdownProps> = () => {
  const navigate = useNavigate();

  return (
    <div className="MintCountdown d-none d-md-block">
      {/* <img className="board" alt="Mint Countdown" src={board} /> */}
      <div className="position-relative">
        <img className="rumbler img-fluid" alt="Mint Countdown" src={rumbler} />
        <div className="text-wrapper">
          <p className="lilita-font subtitle-1 shadow-1 text-white text-uppercase">
            The genesis Mint
          </p>
          <p className="lilita-font heading-4 shadow-1 text-green">
            <Countdown date={Date.parse("15 Feb 2022")} />
          </p>
          <CommonButton
            className="rw-btn-primary body-1 btn-small"
            onClick={() => navigate("/mint")}
          >
            Go to Mint
          </CommonButton>
        </div>
      </div>
    </div>
  );
};

export default MintCountdown;
