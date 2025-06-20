import { FunctionComponent } from "react";
import "./MilestoneCard.scss";
import pointer from "assets/roadmap/pointer.svg";
import incubator from "assets/roadmap/yellow_incubator.png";
// import flag from "assets/roadmap/flag.png";

interface MilestoneCardProps {
  position?: string; //'left' or 'right
  offset?: number; //offset from top in pixels
  title?: string;
  subtitles?: string[];
  description?: string;
  image?: string;
  phase?: boolean;
  color?: string;
}

const MilestoneCard: FunctionComponent<MilestoneCardProps> = (props) => {
  const position = props.position ? props.position.toLowerCase() : "right";
  const offset = (props.offset ? props.offset + 200 : 200) + "px";

  const title = props.title ? props.title : "";
  const subtitles = props.subtitles ? props.subtitles : [];
  const description = props.description ? props.description : "";
  const phase = props.phase ? props.phase : false;
  const color = props.color ? props.color : "#ff303c";

  const image = props.image ? props.image : incubator;

  return (
    <div
      className={`milestonecard-wrapper ${phase ? "phase " : ""}` + position}
      style={{ top: offset }}
    >
      <div className="position-relative">
        {phase && (
          <div
            className={"icon-wrapper " + position}
            style={{ backgroundColor: color }}
          >
            <img src={image} alt="milestone" className="milestone-icon" />
          </div>
        )}
        <div
          className={
            `pointer-wrapper d-none d-lg-block  ${phase ? "phase " : ""}` +
            position
          }
        >
          <img src={pointer} className="pointer" alt="pointer" />
        </div>
        <div
          className={`description-wrapper ${phase ? "phase " : ""}` + position}
          style={{ backgroundColor: phase ? color : "" }}
        >
          <div className="description-text-wrapper">
            {title !== "" ? (
              <div className="description-header lilita-font heading-5 shadow-1 text-white text-uppercase">
                {title}
              </div>
            ) : (
              ""
            )}
            <ul className="description-subheader-wrapper lilita-font body-1 shadow-1 text-white text-uppercase">
              {subtitles.map((subtitles, i) => {
                return (
                  <li className="description-subheader text-white" key={i}>
                    {subtitles}
                  </li>
                );
              })}
            </ul>
            <div className="description-content inter-font caption regular text-white">
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MilestoneCard;
