import { FunctionComponent, useState } from "react";
// import background from "assets/home/block-1/background.png";
import foreground from "assets/mint/banner/foreground.png";
import ticket from "assets/common/ticket.png";
import ticketImage from "assets/common/ticket-lg.png";
import "./banner.scss";
import CommonButton from "components/Common/CommonButton";
// import confetti from "canvas-confetti";

import incubator from "assets/mint/modal/incubator-legendary.png";
import incubators from "assets/mint/modal/incubators.png";
import Incubators from "../Incubators/Incubators";
import IncubatorModal from "components/Common/IncubatorModal";
import CommonModal from "components/Common/CommonModal";
// import Countdown from "react-countdown";
import StarryBackground from "components/Common/StarryBackground";

interface MintBannerProps {}

const MintBanner: FunctionComponent<MintBannerProps> = () => {
  const [show, setShow] = useState(false);
  // const [countdown, setCountdown] = useState(false);
  const [showMintInfo, setShowMintInfo] = useState(false);
  const [modals, setModals] = useState({ wheelspin: false });

  const handleMintInfo = () => setShowMintInfo(!showMintInfo);

  const handleClose = () => setShow(false);
  // const handleShow = () => {
  //   confetti({
  //     particleCount: 150,
  //     spread: 60,
  //   });
  //   setShow(true);
  // };

  return (
    <div className="MintBanner">
      {/* <img
        className="w-100 h-100 pt-1 d-inline background"
        src={background}
        alt="background"
      /> */}
      <StarryBackground />
      <img
        className="w-100 pt-1 d-inline foreground"
        src={foreground}
        alt="foreground"
      />
      <div className="incubator-wrapper" id="incubator-models">
        <Incubators />
        {/* <img
          className="placeholder-image char img-fluid"
          src={incubatorsph}
          alt="placeholder"
        /> */}
      </div>
      <div className="container mx-auto block-wrapper text-center">
        <h1 className="lilita-font heading-1 shadow-2 text-white text-uppercase">
          <span className="position-relative">
            The Genesis Mint
            <span
              style={{ cursor: "pointer", marginLeft: "20px" }}
              onClick={handleMintInfo}
              className="body-1 info-label"
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 16V12"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 8H12.01"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {/* <span
                className="d-none d-md-block semibold"
                style={{ marginLeft: "5px" }}
              >
                Info
              </span> */}
            </span>
          </span>
        </h1>
        <p className="body-1 semibold text-white">
          10,000 unique incubated Rumblers adopted straight from the heart of
          Solaria Prime. <br className="d-none d-lg-block" /> Each incubator
          contains one unique Rumbler and three random bonus cosmetics
          <br className="d-none d-lg-block" /> with a{" "}
          <span
            className="wheelspin-highlight"
            onClick={() => setModals({ ...modals, wheelspin: true })}
          >
            <img className="d-inline m-r10" src={ticket} alt="foreground" />
            <span className="underline">Spin Wheel Token</span>
          </span>{" "}
          awarded for every two incubators minted.
        </p>
        {/* <h6 className="lilita-font heading-6 shadow-6 text-white text-uppercase">
          Sale Starts in
        </h6> */}
        {/* <p className="countdown lilita-font heading-1 shadow-1">
          <Countdown
            date={Date.parse("15 Feb 2022")}
            renderer={({ days, hours, minutes, seconds, completed }) => {
              if (completed) {
                // Render a complete state
                return "";
              } else {
                // Render a countdown
                return (
                  <span>
                    {days}d:{hours}h:{minutes}m:{seconds}s
                  </span>
                );
              }
            }}
            onComplete={() => setCountdown(true)}
          />
        </p> */}
        {/* {countdown && (
          <CommonButton
            className="rw-btn-primary heading-6 lean"
            onClick={handleShow}
          >
            Adopt A Rumbler
          </CommonButton>
        )} */}
      </div>

      <IncubatorModal show={show} onHide={handleClose} incubatorImg={incubator}>
        <p className="lilita-font heading-4 text-white shadow-1 text-uppercase">
          Awesome!
        </p>
        <p className="overline semibold text-gray">
          Congratulations on Adopting your very own Rumbler. <br /> <br />
          You Received:
        </p>
        <p className="lilita-font heading-6 text-uppercase">
          1x <span className="text-yellow">Legendary Incubator</span>
        </p>
        <div className="pb-5"></div>
      </IncubatorModal>

      <CommonModal
        show={showMintInfo}
        onHide={handleMintInfo}
        topImage={incubators}
        close
      >
        <div className="content">
          <p className="lilita-font heading-4 text-white shadow-3 text-center">
            THE MINT
          </p>
          <ul className="body-2 semibold">
            <li>
              Out of the total incubators available, each Rumble Worlds partner
              project would recieve a limited whitelist allocation, with the
              remaining incubators going into the public sale.
            </li>
            <br />
            <li>
              The Incubator tiers you recieve is completely random. Rarity
              distrubution is as follows.
              <br />
              <b>
                <span className="text-green"> Common(50%)</span>,
                <span className="text-blue"> Rare(25%)</span>,
                <span className="text-purple"> Epic(15%)</span>,
                <span className="text-yellow"> Legendary(9.75%)</span> and
                <span className="text-red"> Mythical(0.25%)</span>.
              </b>
            </li>
            <br />
            <li>
              On hatch day each Incubator will drop a{" "}
              <b>Rumbler + 3 cosmetic items</b> based on the tier of incubator
            </li>
            <br />
            <li>
              A spin wheel token is awarded for every two eggs minted. Tokens
              can be redeemed on a later date to be announced
            </li>
          </ul>
          <div className="pb-2"></div>
          <div className="text-center">
            <CommonButton
              className="rw-btn-primary w-75"
              onClick={handleMintInfo}
            >
              Got it
            </CommonButton>
          </div>
        </div>
      </CommonModal>

      <CommonModal
        show={modals.wheelspin}
        onHide={() => setModals({ ...modals, wheelspin: false })}
        topImage={ticketImage}
        close
      >
        <div className="content text-white text-center spin-wheel-modal">
          <div className="pb-4"></div>
          <p className="lilita-font heading-4 shadow-1">SPIN WHEELS</p>
          <p className="caption 1 semibold">
            A spin wheel token is awarded for every two eggs minted. Spin Wheel
            Tokens can be redeemed on a later date to be announced
          </p>
          <p className="caption 1 semibold">
            Each spin wheel would provide one of the following 8 Things:
          </p>
          <ul className="caption 1 spinwheel-list">
            <li>Cosmetic Lootbox</li>
            <li>Token Allocation </li>
            <li>Land Allocation</li>
            <li>Free Rumbler</li>
            <li>Free land </li>
            <li>Founders Lounge Access Pass </li>
          </ul>

          <div className="pb-3"></div>
          <CommonButton
            className="rw-btn-primary w-75"
            onClick={() => setModals({ ...modals, wheelspin: false })}
          >
            Got it
          </CommonButton>
        </div>
      </CommonModal>

      {/* <Modal size="lg" centered show={showMintInfo}>
        <div className="d-flex">
          <Modal.Body style={{ flexGrow: "auto" }}>
            <Modal.Header closeButton bsPrefix="CommonModal header">
              <img className="top-image" src={incubators} alt="Incubators" />
            </Modal.Header>
            <div className="content">
              <p className="lilita-font heading-4 text-white shadow-3 text-center">
                The Mint
              </p>
              <p className="body-2 semibold">
                <li>Each Wallet is able to mint upto 5 Rumbler incubators. </li>
                <br />
                <li>
                  The Incubator tiers you recieve is completely random. Rarity
                  distrubution is as follows.
                  <br />
                  <b>
                    <span className="text-green"> Common(50%)</span>,
                    <span className="text-blue"> Rare(25%)</span>,
                    <span className="text-purple"> Epic(15%)</span>,
                    <span className="text-yellow"> Legendary(9.75%)</span> and
                    <span className="text-red"> Mythical(0.25%)</span>.
                  </b>
                </li>
                <br />
                <li>
                  On hatch day each Incubator will drop a{" "}
                  <b>Rumbler + 3 cosmetic items</b> based on the tier of
                  incubator.
                </li>
                <br />
                <li>
                  A spin wheel token is awarded for every two eggs minted.
                  Wheelspin Tokens can be redeemed on a later date to be
                  announced
                </li>
              </p>
              <div className="pb-5"></div>
              <div className="text-center">
                <CommonButton
                  className="rw-btn-primary w-75"
                  onClick={handleMintInfo}
                >
                  Got it
                </CommonButton>
              </div>
            </div>
          </Modal.Body>
        </div>
      </Modal> */}
    </div>
  );
};

export default MintBanner;
