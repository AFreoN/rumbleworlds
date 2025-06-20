import TeamGrid from "components/Team/TeamGrid/TeamGrid";
import { FunctionComponent, useEffect } from "react";
import StarryBackground from "components/Common/StarryBackground";
import mm from "assets/team/logos/mm.png";
import solarians from "assets/team/logos/solarians.gif";
import brl from "assets/team/logos/brl.png";

interface TeamPageProps {}

const TeamPage: FunctionComponent<TeamPageProps> = () => {
  useEffect(() => {
    document.title = "Rumble Worlds - Team";
  }, []);
  return (
    <>
      <StarryBackground />{" "}
      <div className="container position-relative">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div
              className="teams"
              style={{
                paddingTop: "10rem",
                color: "white",
              }}
            >
              <div
                className="lilita-font heading-1 shadow-1"
                style={{ textAlign: "center", marginBottom: "10px" }}
              >
                THE TEAM
              </div>

              <div
                className="inter-font subtitle-1 semibold shadow-p"
                style={{
                  textAlign: "center",
                  margin: "0 auto",
                  marginBottom: "11px",
                }}
              >
                The Team behind the Development of Rumble Worlds: <br />
              </div>
              <hr />
              <div className="team-logos ">
                <div className="team-logo">
                  <img
                    className="img-fluid"
                    src={mm}
                    alt="team-logo"
                    style={{ maxHeight: "110px" }}
                  ></img>
                </div>
                <div className="team-logo">
                  <img
                    className="img-fluid"
                    src={solarians}
                    alt="team-logo"
                    style={{ maxHeight: "110px" }}
                  ></img>
                </div>
                <div className="team-logo">
                  <img
                    className="img-fluid"
                    src={brl}
                    alt="team-logo"
                    style={{ maxHeight: "110px" }}
                  ></img>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <TeamGrid />
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamPage;
