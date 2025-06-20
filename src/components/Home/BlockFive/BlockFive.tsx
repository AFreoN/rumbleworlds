import { FunctionComponent, useState } from "react";
import { useNavigate } from "react-router";
import penguin from "assets/home/block-5/penguin.png";
import discordButton from "assets/footer/discord-button.svg";
import externalLink from "assets/common/external-link.svg";
import "./block-five.scss";
// import ScrollAnimation from "react-animate-on-scroll";

interface BlockFiveProps {}

interface ToggleHeaderProps {
  toggle?: boolean;
  title: string;
  texts: string[];
}

const ToggleHeader: FunctionComponent<ToggleHeaderProps> = ({
  toggle,
  title,
  texts,
  children,
}) => {
  const [toggler, setToggler] = useState(toggle || false);

  return (
    // <ScrollAnimation
    //   offset={10}
    //   animateIn="animate__fadeInUp"
    //   duration={0.5}
    //   animateOnce={true}
    // >
    <div className="toggle-bar">
      <div
        className="d-flex justify-content-between bar-heading"
        onClick={() => setToggler(!toggler)}
      >
        <h6 className="subtitle-1 semibold">{title}</h6>
        <span className={"icon" + (toggler ? " opened" : "")}>
          <svg
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.4998 5.62451L13.4998 21.3745"
              stroke="white"
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.3744 13.5L13.4994 21.375L5.62436 13.5"
              stroke="white"
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
      <div className={"subtitle-1 content" + (toggler ? " opened" : "")}>
        {texts.map((text) => (
          <p key={text}>
            {text}
            <br />
          </p>
        ))}
        {children}
        <div className="p-3"></div>
      </div>
      <div className="separator"></div>
    </div>
    // </ScrollAnimation>
  );
};

const BlockFive: FunctionComponent<BlockFiveProps> = () => {
  const navigate = useNavigate();
  const data = [
    {
      title: "What NFTs will I be able to play as?",
      texts: [
        "Check out our Discord for the latest news on the onboarded NFT collections! We are currently working with 80+ collections.",
      ],
      toggle: true,
      children: (
        <button
          className="join-discord-button lilita-font heading-7 w-100 d-flex justify-content-center mx-auto"
          onClick={() => window.open("https://dsc.gg/rumbleverse")}
        >
          <img
            className="img-fluid discord-logo"
            src={discordButton}
            alt="discord"
          />
          <span>JOIN THE DISCORD</span>
        </button>
      ),
    },
    {
      title: "What's so different about Rumble Worlds and other sandbox games?",
      texts: [
        "Rumble Worlds's DAO, player economy, great graphics and powerful creator tools will be some of the many unique aspects about the game. Players will also have a wide variety of new opportunities to govern major aspects of the metaverse's economy. ",
        "",
        "More information on gameplay and economic integrations will be announced soon!",
      ],
    },
    {
      title: "Can I battle other NFTs in the game?",
      texts: ["Yup! You will be able to!"],
    },
    {
      title: "How can I play with my own NFTs in Rumble Worlds?",
      texts: [
        "If your collection is supported by Rumble Worlds, we will have a game-ready version of your NFT inside the game that you can access on login. More details coming soon!",
      ],
    },
    {
      title: "Where is the litepaper & Roadmap?",
      texts: [
        "Your can find the latest versions of our Litepaper and Roadmap here:",
      ],
      children: (
        <div className="links d-flex">
          <button
            className="lilita-font body-1 d-flex justify-content-center align-items-center rw-btn rw-btn-primary pall-3"
            style={{ marginRight: "20px" }}
            onClick={() =>
              window.open(
                "https://rumble-worlds.gitbook.io/rumble-worlds-litepaper-v1/RumbleWorlds/rumbleworlds"
              )
            }
          >
            <span style={{ marginRight: "10px" }}>Litepaper</span>
            <img
              className="img-fluid external-link"
              src={externalLink}
              alt="external"
            />
          </button>
          <button
            className="lilita-font body-1 d-flex justify-content-center align-items-center rw-btn rw-btn-primary pall-3"
            onClick={() => navigate("/roadmap")}
          >
            <span style={{ marginRight: "10px" }}>Roadmap</span>
            <img
              className="img-fluid external-link"
              src={externalLink}
              alt="external"
            />
          </button>
        </div>
      ),
    },
    // {
    //   title: "Will we be waiting ages to play such a big game?",
    //   texts: [
    //     "No, we have a strategic roadmap to get a playable beta out asap. ",
    //   ],
    // },
    {
      title: "What platforms will Rumble Worlds support?",
      texts: [
        "Rumble Worlds will first be released on PC. Stay tuned for announcements on support for other platforms!",
      ],
    },
    {
      title: "What are the play to earn mechanics?",
      texts: [
        "There will be countless ways to earn $RUMB! This includes:",
        "- Trading NFTs",
        "- Staking Rumble Coin",
        "- Building and participating and winning in games",
        "and way more...",
      ],
    },
  ];
  return (
    <div className="block-5 text-white">
      <img
        className="img-fluid penguin d-none d-lg-block"
        src={penguin}
        alt="Penguin"
      />
      <div className="block-wrapper mx-auto container">
        <div className="col-10 mx-auto">
          <h2 className="heading-1 lilita-font title">FAQS</h2>
          {data.map((item) => (
            <ToggleHeader
              title={item.title}
              texts={item.texts}
              toggle={item.toggle || false}
              key={item.title}
              children={item.children}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlockFive;
