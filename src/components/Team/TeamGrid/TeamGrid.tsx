import { FunctionComponent } from "react";
import "./TeamGrid.scss";
import Team from "../Team/Team";

import leslie from "assets/team/leslie.jpg";
import ohme from "assets/team/ohme.jpg";
import chelaka from "assets/team/wolfie.jpg";
import sherwin from "assets/team/sherwin.jpg";
import jaidevh from "assets/team/jaidevh.jpg";
import lahiru from "assets/team/lahiru.jpg";
import levi from "assets/team/levi.jpg";
import anish from "assets/team/anish.jpg";
import nav from "assets/team/nav.jpg";
import chamal from "assets/team/chamal.jpg";
import roshan from "assets/team/roshan.jpg";
import haykel from "assets/team/haykel.jpg";
import dilshaad from "assets/team/dilshaad.jpg";
import lekhya from "assets/team/lekhya.jpg";
import allan from "assets/team/allan.jpg";
import kevin from "assets/team/kevin.jpg";
import sav from "assets/team/sav.jpg";
import aaqil from "assets/team/aaqil.jpg";

interface TeamGridProps {}

const TeamGrid: FunctionComponent<TeamGridProps> = () => {
  const team = [
    {
      name: "Lekhya",
      role: "Co‑Founder & Head of NFT Partnerships",
      image: lekhya,
    },
    {
      name: "Anish",
      role: "Co‑Founder & Game Director",
      image: anish,
    },
    {
      name: "OhMe",
      role: "Co‑Founder & Co‑Head of Strategy",
      image: ohme,
    },
    {
      name: "Leslie",
      role: "Advisor & Co‑Founder",
      image: leslie,
    },
    {
      name: "Nav",
      role: "Co‑Founder & Head of Finance & VC Outreach",
      image: nav,
    },
    {
      name: "Sav",
      role: "Co‑Founder & Co‑Head of Strategy",
      image: sav,
    },
    {
      name: "Aaqil",
      role: "Co‑Founder & Technology Lead",
      image: aaqil,
    },
    {
      name: "Dilshaad",
      role: "Co‑Founder & Head of Marketing",
      image: dilshaad,
    },
    {
      name: "Chelaka",
      role: "Project Management",
      image: chelaka,
    },
    {
      name: "Roshan",
      role: "Art Director",
      image: roshan,
    },
    {
      name: "Jaidev",
      role: "3D Generalist",
      image: jaidevh,
    },
    {
      name: "Levi",
      role: "Social Media Manager",
      image: levi,
    },
    {
      name: "Sherwin",
      role: "Social Media Manager",
      image: sherwin,
    },
    {
      name: "Kevin",
      role: "Character Artist",
      image: kevin,
    },
    {
      name: "Haykel",
      role: "Environment Artist, Character Art",
      image: haykel,
    },
    {
      name: "Allan",
      role: "Environment Artist",
      image: allan,
    },
    {
      name: "Lahiru",
      role: "Outsourcing Manager",
      image: lahiru,
    },
    {
      name: "Chamal",
      role: "Admin Support",
      image: chamal,
    },
  ];

  return (
    <div
      className="team-grid"
      style={{
        paddingBottom: "10rem",
        paddingTop: "3rem",
      }}
    >
      {team.map((team, i) => (
        <Team {...team} key={i} />
      ))}
    </div>
  );
};

export default TeamGrid;
