import { FunctionComponent, useEffect, useState } from "react";
import CommonButton from "./CommonButton";
import logo from "assets/logo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Modal } from "react-bootstrap";
// import { Dropdown, Modal } from "react-bootstrap";
// import ticket from "assets/common/ticket.png";
// import currentWallet from "assets/common/wallet/Phantom.png";
import big_icon from "assets/common/wallet/big-icon.png";
import phantom from "assets/common/wallet/Phantom.png";
import sollet from "assets/common/wallet/Sollet.png";
import solflare from "assets/common/wallet/Solflare.png";
import solong from "assets/common/wallet/Solong.png";
import mathWallet from "assets/common/wallet/MathWallet.png";
import ticketImage from "assets/common/ticket-lg.png";
import CommonModal from "./CommonModal";
import discord from "assets/common/discord.svg";
import twitter from "assets/common/twitter.svg";

interface NavBarProps {}

const NavBar: FunctionComponent<NavBarProps> = () => {
  const [show, setShow] = useState(false);
  const [modals, setModals] = useState({ backpack: false, wheelspin: false });
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  useEffect(() => {
    window.addEventListener("resize", () => setShowMenu(false));
  });

  return (
    <div className="NavBar d-flex justify-content-between container">
      <div className="btn-container d-flex align-items-center">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <CommonButton
          className={
            "rw-btn-secondary body-1 lean d-none d-lg-block" +
            (location.pathname === "/mint" ? " active" : "")
          }
           onClick={() => navigate("/mint")}
        >
          Rumblers
          
          
          
        </CommonButton>
        <CommonButton
          className={"rw-btn-secondary body-1 lean d-none d-lg-block"}
          onClick={() => navigate("/roadmap")}
        >
          Roadmap
        </CommonButton>
        <CommonButton
          className={"rw-btn-secondary body-1 lean d-none d-lg-block"}
          onClick={() => navigate("/team")}
        >
          Team
        </CommonButton>
        {/* <CommonButton
          className={"rw-btn-secondary body-1 lean d-none d-lg-block"}
          onClick={() => navigate("/partners")}
        >
          Partners
        </CommonButton> */}
        <CommonButton
          className="rw-btn-secondary body-1 lean d-none d-lg-block"
          onClick={() =>
            window.open(
              "https://rumbleworlds.substack.com/p/coming-soon?showWelcome=true"
            )
          }
        >
          News
        </CommonButton>
        <CommonButton
          className="rw-btn-secondary body-1 lean d-none d-lg-block"
          onClick={() =>
            window.open(
              "https://rumble-worlds.gitbook.io/rumble-worlds-litepaper-v1/RumbleWorlds/rumbleworlds"
            )
          }
        >
          Litepaper
        </CommonButton>
      </div>
      <div className="icons d-flex justify-content-evenly align-items-center">
        <img
          className="img-fluid"
          src={discord}
          alt="discord"
          onClick={() => window.open("https://dsc.gg/rumbleverse")}
        />
        <img
          className="img-fluid"
          src={twitter}
          alt="twitter"
          onClick={() => window.open("https://twitter.com/rumbleworlds_io")}
        />
      </div>
      {/* <CommonButton
        className="rw-btn rw-btn-primary lean d-none d-lg-block"
        onClick={handleShow}
      >
        Mint a Rumbler
      </CommonButton> */}
      {/* <Dropdown>
        <Dropdown.Toggle bsPrefix="rw-btn rw-btn-primary lean d-none d-lg-block">
          <span>ID: Marcus Testing</span>
        </Dropdown.Toggle>

        <Dropdown.Menu align="end" bsPrefix="dropdown-menu rw-dropdown">
          <div className="triangle-decorate" /> */}
      {/* <Dropdown.Item
            bsPrefix="dropdown-item rw-dropdown-item body-2 bold text-uppercase"
            onClick={() => setModals({ ...modals, backpack: true })}
          >
            <img alt="Icon" src={backpack} /> My Rumblepack
          </Dropdown.Item> */}
      {/* <Dropdown.Item
            bsPrefix="dropdown-item rw-dropdown-item body-2 bold text-uppercase"
            onClick={() => setModals({ ...modals, wheelspin: true })}
          >
            <img alt="Icon" src={ticket} />
            Spin Wheels
            <div className="spins-left semibold">
              <span>2</span>
            </div>
          </Dropdown.Item>
          <Dropdown.Item bsPrefix="dropdown-item rw-dropdown-item body-2 bold text-uppercase">
            <img alt="Icon" src={currentWallet} />
            Disconnect Wallet
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> */}
      <div className="d-block d-md-none ">
        <CommonButton
          className="rw-btn rw-btn-primary lean dropdown-btn"
          onClick={() => setShowMenu(true)}
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_2575_119474)">
              <path
                d="M3.49049 12.6064H21.4905"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.49049 6.60645H21.4905"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.49049 18.6064H21.4905"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_2575_119474"
                x="0.490486"
                y="0.606445"
                width="24.6284"
                height="26.5138"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="0.628449" dy="2.51379" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2575_119474"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2575_119474"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </CommonButton>
      </div>
      <Modal
        size="sm"
        centered
        show={show}
        onHide={handleClose}
        contentClassName="connect-modal"
      >
        <Modal.Header closeButton bsPrefix="connect-modal-header">
          <img className="top-image" src={big_icon} alt="Connect Wallet" />
        </Modal.Header>
        <Modal.Body bsPrefix="connect-modal-body">
          <p className="lilita-font heading-7 shadow-3 text-white text-center text-uppercase">
            Select your Wallet
          </p>
          <div className="content">
            <div className="item body-1 semibold">
              <img className="icon" src={phantom} alt="Phantom" />
              Phantom
            </div>
            <div className="item body-1 semibold">
              <img className="icon" src={sollet} alt="Sollet" />
              Sollet
            </div>
            <div className="item body-1 semibold">
              <img className="icon" src={solflare} alt="Solflare" />
              Solflare
            </div>
            <div className="item body-1 semibold">
              <img className="icon" src={solong} alt="Solong" />
              Solong
            </div>
            <div className="item body-1 semibold">
              <img className="icon" src={mathWallet} alt="Math Wallet" />
              Math Wallet
            </div>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <CommonButton className="btn btn-primary" onClick={handleClose}>
            Close
          </CommonButton>
          <CommonButton className="btn btn-secondary" onClick={handleClose}>
            Save Changes
          </CommonButton>
        </Modal.Footer> */}
      </Modal>

      <CommonModal
        close
        show={modals.backpack}
        onHide={() => setModals({ ...modals, backpack: false })}
      >
        Backpack Modal
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
            A spin wheel token is awarded for every two eggs minted. Wheelspin
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

      <div className={"mobile-menu" + (showMenu ? " active" : "")}>
        <div className="content">
          <div
            className="title d-flex justify-content-between"
            onClick={() => navigate("/")}
          >
            <img className="logo" src={logo} alt="logo" />
            <CommonButton
              className="rw-btn-primary lean d-block d-md-none dropdown-btn"
              onClick={() => setShowMenu(false)}
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_1706_124708)">
                  <path
                    d="M18.5098 6.60657L6.50977 18.6066"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.50977 6.60657L18.5098 18.6066"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_1706_124708"
                    x="0.509766"
                    y="0.606567"
                    width="24.6284"
                    height="26.5138"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="0.628449" dy="2.51379" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1706_124708"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1706_124708"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </CommonButton>
          </div>
          <ul
            className="lilita-font heading-5 shadow-5 text-uppercase text-white"
            onClick={() => setShowMenu(false)}
          >
            {/* <li className="text-lightgray" onClick={() => navigate("/mint")}>
              Rumblers
            </li> */}
            <li onClick={() => navigate("/roadmap")}>Roadmap</li>
            <li onClick={() => navigate("/team")}>Team</li>
            {/* <li onClick={() => navigate("/partners")}>Partners</li> */}
            <li
              onClick={() =>
                window.open(
                  "https://rumbleworlds.substack.com/p/coming-soon?showWelcome=true"
                )
              }
            >
              News
            </li>
            <li
              onClick={() =>
                window.open(
                  "https://rumble-worlds.gitbook.io/rumble-worlds-litepaper-v1/RumbleWorlds/rumbleworlds"
                )
              }
            >
              Lightpaper
            </li>
          </ul>
          {/* <CommonButton className="rw-btn rw-btn-primary w-100" disabled>
            Connect Wallet
          </CommonButton> */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
