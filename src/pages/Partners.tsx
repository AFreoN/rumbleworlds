import PartnersGrid from "components/Partners/PartnersGrid/PartnersGrid";
import React from "react";
import { FunctionComponent, useEffect } from "react";
import penguin from "assets/partners/partners_penguin.png";
import sunk from "assets/partners/partners_sunk.png";
import StarryBackground from "components/Common/StarryBackground";

interface PartnersPageProps {}

const PartnersPage: FunctionComponent<PartnersPageProps> = () => {
  useEffect(() => {
    document.title = "Rumble Worlds - Partners";
  }, []);
  return (
    <>
      <StarryBackground />{" "}
      <img
        className="d-none d-md-block"
        src={penguin}
        alt="penguin"
        style={{
          position: "absolute",
          top: "162px",
        }}
      />
      <img
        className="d-none d-md-block"
        src={sunk}
        alt="sunk"
        style={{
          position: "absolute",
          top: "830px",
          right: "0",
        }}
      />
      <div className="container position-relative">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div
              className="Partners"
              style={{
                paddingTop: "10rem",
                color: "white",
              }}
            >
              <div
                className="lilita-font heading-1 shadow-1"
                style={{ textAlign: "center", marginBottom: "10px" }}
              >
                {" "}
                PARTNERS{" "}
              </div>

              <div
                className="inter-font subtitle-1 semibold shadow-p"
                style={{
                  textAlign: "center",
                  margin: "0 auto",
                  marginBottom: "11px",
                }}
              >
                {" "}
                Rumble Worlds partners with your favourite NFT collections to
                bring them into the Rumble Worlds Metaverse as 3D playable
                characters. Here’s a few of our existing partners that will be
                available on launch with more collections added daily.
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div
              className="add-collection-bar text-uppercase"
              onClick={() => window.open("https://forms.gle/KFTZ5BnihrzMe4NdA")}
            >
              <span>
                Want to see your NFT collection in Rumble Worlds? Get in touch
                with us today!
                <strong className="seperator">●</strong>
              </span>
              <span>
                Want to see your NFT collection in Rumble Worlds? Get in touch
                with us today!
                <strong className="seperator">●</strong>
              </span>
              <span>
                Want to see your NFT collection in Rumble Worlds? Get in touch
                with us today!
                <strong className="seperator">●</strong>
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <PartnersGrid />
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnersPage;
