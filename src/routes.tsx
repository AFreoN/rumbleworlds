import MintPage from "pages/Mint";
//import PartnersPage from "pages/Partners";
import NotFoundPage from "pages/NotFoundPage";
import PrivacyPage from "pages/Privacy";
import RoadmapPage from "pages/Roadmap";
import TeamPage from "pages/Team";
import TermsPage from "pages/Terms";
import { PathRouteProps } from "react-router";
import HomePage from "./pages/Home";

const routes: PathRouteProps[] = [
  {
    path: "/",
    element: <HomePage />,
  },
   {
     path: "/mint",
     element: <MintPage />,
   },
  {
    path: "/privacy",
    element: <PrivacyPage />,
  },
  {
    path: "/terms",
    element: <TermsPage />,
  },
  // {
  //   path: "/partners",
  //   element: <PartnersPage />,
  // },
  {
    path: "/roadmap",
    element: <RoadmapPage />,
  },
  {
    path: "/team",
    element: <TeamPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

export default routes;
