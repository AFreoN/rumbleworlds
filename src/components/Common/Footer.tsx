import { FunctionComponent, useState } from "react";
import background from "assets/footer/background.png";
import logo from "assets/logo.png";
import discord from "assets/footer/discord.png";
import twitter from "assets/footer/twitter.png";
import reddit from "assets/footer/reddit.png";
import telegram from "assets/footer/telegram.png";
import newsletter from "assets/footer/newsletter.png";
import discordButton from "assets/footer/discord-button.svg";
import emailImage from "assets/common/email.png";
import CommonButton from "./CommonButton";
import confetti from "canvas-confetti";
// import * as hubspot from "@hubspot/api-client";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import CommonModal from "./CommonModal";

// const API_KEY = "6a24e4cc-d831-4499-89da-a8a8b6ecc4d8";
// const API_KEY = "demo";
interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);

  // const hubspotClient = new hubspot.Client({
  //   apiKey: API_KEY,
  //   defaultHeaders: {
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Headers":
  //       "Origin, X-Requested-With, Content-Type, Accept",
  //     "Access-Control-Allow-Methods": "POST, GET, OPTIONS, PATCH, PUT",
  //     "Access-Control-Allow-Credentials": "true",
  //     "Content-Type": "application/json;charset=utf-8",
  //   },
  // });

  const handleClose = () => setShow(false);
  const handleShow = () => {
    confetti({
      particleCount: 150,
      spread: 60,
    });
    setShow(true);
  };

  const [email, setEmail] = useState("");

  // const fetchData = () => {
  //   const data = {
  //     properties: [
  //       {
  //         property: "email",
  //         value: email,
  //       },
  //     ],
  //   };
  //   return axios({
  //     method: "post",
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //       "Access-Control-Allow-Headers":
  //         "Origin, X-Requested-With, Content-Type, Accept",
  //       "Access-Control-Allow-Methods": "POST, GET, OPTIONS, PATCH, PUT",
  //       "Access-Control-Allow-Credentials": "true",
  //       "Content-Type": "application/json;charset=utf-8",
  //     },
  //     url: "https://api.hubapi.com/contacts/v1/contact/?hapikey=" + API_KEY,
  //     // params: {
  //     //   properties: [
  //     //     {
  //     //       property: "email",
  //     //       value: email,
  //     //     },
  //     //   ],
  //     // },
  //     data: JSON.stringify(data),
  //   })
  //     .catch((res) => {
  //       // err.
  //       const { data, status } = res.response;
  //       console.log(res.response);
  //       if (status === 409) {
  //         handleShow();
  //         return;
  //       }
  //       alert(data.message);
  //     })
  //     .then((result) => {
  //       console.log(result);
  //       if (result) handleShow();
  //     })
  //     .finally(() => {
  //       console.log("finally");
  //     });
  // };

  // const fetchHubspot = () => {
  //   return hubspotClient.crm.contacts.basicApi
  //     .create({
  //       properties: {
  //         property: "email",
  //         value: email,
  //       },
  //     })
  //     .catch((res) => {
  //       // err.
  //       // const { data, status } = res.response;
  //       // console.error(res);
  //       // if (status === 409) {
  //       //   handleShow();
  //       //   return;
  //       // }
  //       // alert(data.message);
  //       setShowError(true);
  //       // alert(res);
  //     })
  //     .then((result) => {
  //       console.log(result);
  //       if (result) handleShow();
  //     })
  //     .finally(() => {
  //       console.log("finally");
  //     });
  // };

  const submitEmail = () => {
    const properties = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    };

    fetch("/api/newsletter", properties)
      .catch((res) => {
        console.log(res);
        setShowError(true);
      })
      .then((res) => {
        console.log(res);
        handleShow();
      });
  };

  const handleChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (!email.length) return;
    // fetchHubspot();
    submitEmail();
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const navigate = useNavigate();
  return (
    <div className="Footer">
      <div className="image-bar text-center">
        <img
          className="img-fluid background"
          src={background}
          alt="Background"
        />
        {/* <div className="characters container mx-auto d-none d-md-block">
          <img className="img-fluid" src={characters} alt="Characters" />
        </div> */}
        <div className="text text-white container-md mx-auto">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <h6 className="lilita-font heading-6 shadow-3">
                BE PART OF OUR COMMUNITY
              </h6>
              <p className="subtitle-1 semibold shadow-p">
                Get the inside scoop on all the new news, big announcements, and
                Rumble Worlds exclusives.
              </p>
            </div>
            <div className="col-12 col-md-6 text-center">
              <button
                className="join-discord-button lilita-font heading-7 mx-auto"
                onClick={() => window.open("https://dsc.gg/rumbleverse")}
              >
                <img
                  className="img-fluid discord-logo"
                  src={discordButton}
                  alt="discord"
                />
                <span>JOIN THE DISCORD</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="info-bar text-white container mx-auto">
        <div className="row">
          <div className="col-12 col-lg-3 text-center pb-5 d-flex flex-lg-column justify-content-between flex-wrap justify-content-lg-start align-items-center">
            <img className="img-fluid logo" src={logo} alt="logo" />
            <div className="icons d-flex justify-content-evenly align-items-center flex-wrap">
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
                onClick={() =>
                  window.open("https://twitter.com/rumbleworlds_io")
                }
              />
              <img
                className="img-fluid"
                src={reddit}
                alt="reddit"
                onClick={() =>
                  window.open("https://www.reddit.com/r/rumbleworlds/")
                }
              />
              <img
                className="img-fluid"
                src={telegram}
                alt="telegram"
                onClick={() => window.open("https://t.me/rumbleworlds")}
              />
              <img
                className="img-fluid"
                src={newsletter}
                alt="newsletter"
                onClick={() =>
                  window.open("https://rumbleworlds.substack.com/")
                }
              />
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2 pb-5">
            <ul className="caption-1 semibold">
              <h6 className="header lilita-font heading-6">PAGES</h6>
              <li onClick={() => navigate("/")}>Home</li>
              {/* <li
                onClick={() =>
                  window.open("https://www.rumbleworlds.io/join-us")
                }
              >
                Join Us
              </li> */}
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
                Litepaper
              </li>
              <li>
                Rumblers{" "}
                <span className="text-green" style={{ fontSize: "12px" }}>
                  coming soon
                </span>
              </li>
              {/* <li onClick={() => navigate("/partners")}>Partners</li> */}
              <li onClick={() => navigate("/roadmap")}>Roadmap</li>
              <li onClick={() => navigate("/team")}>Team</li>
              <li onClick={() => window.open("mailto:hello@rumbleworlds.io")}>
                Contact Us
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-4 col-lg-3 pb-5">
            <ul className="caption-1 semibold">
              <h6 className="header lilita-font heading-6">LEGAL</h6>
              {/* <li>Terms & Conditions</li> */}
              <li>
                <Link className="text-white" to="/privacy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="text-white" to="/terms">
                  Terms Of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4 col-lg-4 pb-5">
            <h6 className="header lilita-font heading-6">NEWSLETTER</h6>
            <form className="d-flex align-items-center" onSubmit={handleSubmit}>
              <input
                className="input"
                type="email"
                name="Email"
                value={email}
                placeholder="Email"
                onChange={handleChange}
                pattern="^[a-zA-Z0-9][a-zA-Z0-9._-]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$"
              />
              <input
                className="rw-btn rw-btn-primary"
                type="submit"
                value=">"
              />
            </form>
            <div className="note">
              By providing your Email address you consent to our{" "}
              <Link to="/privacy">
                <u className="text-white">Privacy Policy</u>
              </Link>
              <br /> <br />
              <b>*Disclaimer:</b> All assets displayed are are work in progress
              and is subject to change.
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container mx-auto">
          <p className="text overline semibold text-white text-center text-md-right">
            Copyright © 2022 Rumble Worlds All Rights Reserved
          </p>
        </div>
      </div>
      <CommonModal
        size="lg"
        show={show}
        onHide={handleClose}
        topImage={emailImage}
      >
        <div className="content text-white text-center">
          <div className="pb-4"></div>
          <p className="lilita-font heading-4 shadow-1 text-uppercase">
            All Signed Up!
          </p>
          <p className="caption 1">
            Thank you for subscribing! Your Email is safe with us. We will keep
            you posted on the latest news, product updates, offers and more
          </p>
          <div className="pb-4"></div>
          <CommonButton className="rw-btn-primary w-75" onClick={handleClose}>
            Got it
          </CommonButton>
        </div>
      </CommonModal>

      <CommonModal
        size="sm"
        show={showError}
        onHide={() => setShowError(false)}
      >
        <div className="content text-white text-center">
          <div className="pb-4"></div>
          <p className="lilita-font heading-4 shadow-1 text-red text-uppercase">
            Error!
          </p>
          <p className="caption 1">
            Sorry but an error has occurred! Please try again next time!
          </p>
          <div className="pb-4"></div>
          <CommonButton
            className="rw-btn-primary w-75"
            onClick={() => setShowError(false)}
          >
            Got it
          </CommonButton>
        </div>
      </CommonModal>
    </div>
  );
};

export default Footer;
