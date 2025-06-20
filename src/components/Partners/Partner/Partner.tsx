import { FunctionComponent, useState } from "react";
import "./Partner.scss";
import spaceApe from "assets/partners/space_ape.png";
import imageBg from "assets/partners/red_bg.png";
import discordIcon from "assets/partners/discord_icon.png";
import twitterIcon from "assets/partners/twitter_icon.png";

interface PartnerProps {
  name?: string;
  image?: string;
  discordUrl?: string;
  twitterUrl?: string;
}

const Partner: FunctionComponent<PartnerProps> = (props) => {
  const [imageClass, setImageClass] = useState("partner-image");
  const [bgClass, setBgClass] = useState("partner-image-background");

  const enableHover = () => {
    setImageClass("partner-image img-fluid hovering");
    setBgClass("partner-image-background hovering");
  };

  const disableHover = () => {
    setImageClass("partner-image img-fluid");
    setBgClass("partner-image-background");
  };

  return (
    <div
      className="partner-card"
      onMouseEnter={enableHover}
      onMouseLeave={disableHover}
    >
      <div className="partner-image-wrapper">
        <img
          src={props.image ? props.image : spaceApe}
          alt="partner_image"
          className={imageClass}
        />
        <img src={imageBg} alt="partner_image_bg" className={bgClass} />
      </div>
      <div className="partner-name-wrapper lilita-font subtitle-1 shadow-3 text-uppercase text-white">
        {props.name ? props.name : "Solana Monkey Business"}
      </div>
      <div className="partner-social-wrapper">
        {props.discordUrl ? (
          // ? <div className="partner-social-icon discord-icon"/>
          <a href={props.discordUrl} target="_blank" rel="noreferrer">
            <img
              src={discordIcon}
              alt="discord_icon"
              className="partner-social-icon discord-icon"
            />
          </a>
        ) : null}
        {props.twitterUrl ? (
          // ? <div className="partner-social-icon twitter-icon"/>
          <a href={props.twitterUrl} target="_blank" rel="noreferrer">
            <img
              src={twitterIcon}
              alt="twitter_icon"
              className="partner-social-icon twitter-icon"
            />
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default Partner;
