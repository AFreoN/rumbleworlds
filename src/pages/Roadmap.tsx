import Clouds from "components/Roadmap/Clouds/Clouds";
import MilestoneCard from "components/Roadmap/MilestoneCard/MilestoneCard";
import Vine from "components/Roadmap/Vine/Vine";
import { FunctionComponent, useEffect } from "react";
import ticket from "assets/roadmap/yellow_ticket.png";
import rumblers from "assets/roadmap/rumblers.png";
import StarryBackground from "components/Common/StarryBackground";

interface RoadmapPageProps {}

const RoadmapPage: FunctionComponent<RoadmapPageProps> = () => {
  useEffect(() => {
    document.title = "Rumble Worlds - Roadmap";
  }, []);

  return (
    <>
      <StarryBackground />
      <Clouds />
      <div className="container position-relative">
        <div className="animated-glow"></div>
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div
              className="Roadmap"
              style={{
                paddingTop: "10rem",
                paddingBottom: "0rem",
                color: "white",
              }}
            >
              <div
                className="lilita-font heading-1 shadow-1"
                style={{ textAlign: "center", marginBottom: "15px" }}
              >
                ROADMAP
              </div>

              <div
                className="inter-font subtitle-1 semibold shadow-p"
                style={{
                  textAlign: "center",
                  margin: "0 auto",
                  marginBottom: "11px",
                  position: "relative",
                  zIndex: "2",
                }}
              >
                {" "}
                Our goals for this project are to build it to be the biggest
                metaverse on the blockchain. We’re here in it for the long run.
              </div>

              <div
                className="inter-font subtitle-1 semibold shadow-p"
                style={{
                  textAlign: "center",
                  margin: "0 auto",
                  marginBottom: "71px",
                  position: "relative",
                  zIndex: "2",
                }}
              >
                {" "}
                Here’s what’s ahead.
              </div>
            </div>

            <div className="col-md-12 position-relative">
              <img
                alt="rumblers"
                src={rumblers}
                className="rumblers img-fluid d-none d-lg-block"
                style={{
                  position: "absolute",
                  right: "-100px",
                  bottom: "-13px",
                }}
              />
              <Vine height={4} />
              <MilestoneCard
                position="left"
                title="Phase one"
                phase={true}
                color="#ff303c"
              />
              <MilestoneCard
                position="right"
                offset={150}
                subtitles={[
                  "New Website Release",
                  "Phase One : Expanded Roadmap",
                ]}
                // description="Launch of the new Rumble Worlds Website and updated "
                image={ticket}
              />
              <MilestoneCard
                position="left"
                offset={300}
                subtitles={[
                  "Revealing of Rumblers Lore",
                  "Benefits and Mint Info",
                ]}
                // description="this is a description"
              />
              <MilestoneCard
                position="right"
                offset={450}
                subtitles={["Litepaper V2 release"]}
                // description="this is a description"
              />
              <MilestoneCard
                position="left"
                offset={600}
                subtitles={[
                  "Key Partners 3D Asset Showcase",
                  "Reveal of Partner Projects (80+ currently)",
                ]}

                // description="this is a description"
              />
              <MilestoneCard
                position="right"
                offset={750}
                subtitles={["Rumble Worlds Teaser Trailer"]}
                // description="this is a description"
              />
              <MilestoneCard
                position="left"
                offset={900}
                subtitles={["Rumblers Pre-Sale", "Rumblers Public Sale"]}
                // description="this is a description"
              />
              <MilestoneCard
                position="left"
                offset={1200}
                phase
                title="Phase Two"
                color="#3cec82"
              />
              <MilestoneCard
                position="right"
                offset={1320}
                subtitles={["Trailer Launch", "Land Sale", "$RUMB Public Sale"]}
                // description="this is a description"
              />
              <MilestoneCard
                position="left"
                offset={1440}
                phase
                title="Phase Three"
                color="#077BEC"
              />
              <MilestoneCard
                position="right"
                offset={1560}
                subtitles={[
                  "Rumble Worlds Launch Event",
                  "Public Alpha Launch",
                ]}
                // description="this is a description"
              />
              <MilestoneCard
                position="left"
                offset={1680}
                phase
                title="Phase Four"
                color="#8349FF"
              />
              <MilestoneCard
                position="right"
                offset={1800}
                subtitles={["Public Beta Launch"]}
                // description="this is a description"
              />
              <MilestoneCard
                position="left"
                offset={1920}
                phase
                title="DAO and More..."
                color="#ff303c"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoadmapPage;
