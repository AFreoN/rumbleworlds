import { FunctionComponent } from "react";
import "./partners.scss";
import degen from "assets/home/partners/degen.png";
// import ScrollAnimation from "react-animate-on-scroll";

interface Partners {}
interface PartnerBlock {
  name: string;
  image: string;
}

const PartnerBlock: FunctionComponent<PartnerBlock> = ({ name, image }) => {
  return (
    <div className="partner-block">
      <div className="partner-name">{name}</div>
      <img src={image} />
    </div>
  );
};

const Partners: FunctionComponent<Partners> = () => {
  const partners = [
    {
      name: "Degen",
      image: degen,
    },
    {
      name: "Degen2",
      image: degen,
    },
    {
      name: "Degen2",
      image: degen,
    },
    {
      name: "Degen2",
      image: degen,
    },
    {
      name: "Degen2",
      image: degen,
    },
    {
      name: "Degen2",
      image: degen,
    },
    {
      name: "Degen2",
      image: degen,
    },
    {
      name: "Degen2",
      image: degen,
    },
    {
      name: "Degen2",
      image: degen,
    },
    {
      name: "Degen2",
      image: degen,
    },
    {
      name: "Degen2",
      image: degen,
    },
    {
      name: "Degen2",
      image: degen,
    },
    {
      name: "Degen2",
      image: degen,
    },
    {
      name: "Degen2",
      image: degen,
    },
    {
      name: "Degen2",
      image: degen,
    },
    {
      name: "Degen2",
      image: degen,
    },
    {
      name: "Degen2",
      image: degen,
    },
    {
      name: "Degen2",
      image: degen,
    },
    {
      name: "Degen2",
      image: degen,
    },
    {
      name: "Degen2",
      image: degen,
    },
    {
      name: "Degen2",
      image: degen,
    },
    {
      name: "Degen2",
      image: degen,
    },
    {
      name: "Degen2",
      image: degen,
    },
    {
      name: "Degen2",
      image: degen,
    },
    {
      name: "Degen2",
      image: degen,
    },
    {
      name: "Degen2",
      image: degen,
    },
    {
      name: "Degen2",
      image: degen,
    },
    {
      name: "Degen2",
      image: degen,
    },
    {
      name: "Degen2",
      image: degen,
    },
    {
      name: "Solana Monkey Business",
      image: degen,
    },
  ];
  return (
    <div className="partners-block">
      <div className="container mx-auto">
        <div className="col-12 col-md-8 align-items-center mx-auto">
          <h2 className="lilita-font heading-2 text-white shadow-2 text-center">
            PARTNER PROJECTS
          </h2>
          <p className="inter-font body-1 semibold text-white shadow-p text-center">
            Rumble Worlds partners with your favourite NFT collections to bring
            them into the Rumble Worlds Metaverse as 3D playable characters.
          </p>
        </div>
        <div className="col-12 col-md-12 align-items-center d-flex flex-wrap partners-wrapper">
          {partners.map((item) => (
            <PartnerBlock name={item.name} image={item.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
