import { FunctionComponent } from "react";
import Tilt from "react-parallax-tilt";
import "./Team.scss";

interface TeamProps {
  name?: string;
  role?: string;
  image?: string;
  // discordUrl?: string;
  // twitterUrl?: string;
}

const Team: FunctionComponent<TeamProps> = (props) => {
  return (
    <div className="team-card-wrapper">
      <Tilt
        className="team-card"
        perspective={1000}
        glareEnable={true}
        glareMaxOpacity={0.05}
        // scale={1.02}
        // transitionSpeed={1500}
      >
        <div className="inner-element">
          <div className="team-image-wrapper">
            <img
              src={props.image ? props.image : ""}
              alt="team_image"
              className="team-image img-fluid"
            />
          </div>
          <div className="team-name-wrapper lilita-font subtitle-1 shadow-3 text-uppercase text-white text-center">
            {props.name ? props.name : ""}
          </div>
          <div className="team-role-wrapper caption-1 text-white  text-center">
            {props.role ? props.role : ""}
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default Team;
