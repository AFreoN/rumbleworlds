import { FunctionComponent } from "react";
import "./Vine.scss";
import vineTop from "assets/roadmap/vine_top.png";
import vineMid from "assets/roadmap/vine_mid.png";
import vineBottom from "assets/roadmap/vine_bottom.png";
import vineBottomMirrored from "assets/roadmap/vine_bottom_mirrored.png";

interface VineProps {
  height?: number;
}

const Vine: FunctionComponent<VineProps> = (props) => {
  const vineBlocks = [];

  if (props.height) {
    for (let i = 0; i < props.height; i++) {
      if (i === 0) vineBlocks[0] = <img src={vineTop} alt="vine_top" key={i} />;
      else if (i === 1)
        vineBlocks[1] = <img src={vineMid} alt="vine_mid" key={i} />;
      else if (i > 1) {
        if (i % 2 === 0) {
          vineBlocks[i] = <img src={vineBottom} alt="vine_bottom" key={i} />;
        } else {
          vineBlocks[i] = (
            <img src={vineBottomMirrored} alt="vine_bottom_mirrored" key={i} />
          );
        }
      }
    }
  }

  return <div className="vine-wrapper d-none d-lg-flex">{vineBlocks}</div>;
};

export default Vine;
