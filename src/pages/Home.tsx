import { useEffect } from "react";
import { FunctionComponent, Suspense, lazy } from "react";
import BlockOne from "../components/Home/BlockOne/BlockOne";
import BlockFive from "../components/Home/BlockFive/BlockFive";
import BlockFour from "../components/Home/BlockFour/BlockFour";
import BlockThree from "../components/Home/BlockThree/BlockThree";
// import BlockTwo from "../components/Home/BlockTwo/BlockTwo";

const BlockTwo = lazy(() => import("../components/Home/BlockTwo/BlockTwo"));
// const BlockThree = lazy(() => import('../components/Home/BlockThree/BlockThree'));
// const BlockFour = lazy(() => import('../components/Home/BlockFour/BlockFour'));
// const BlockFive = lazy(() => import('../components/Home/BlockFive/BlockFive'));

interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = () => {
  useEffect(() => {
    document.title = "Rumble Worlds - Home";
  }, []);
  return (
    <div className="HomePage">
      <BlockOne></BlockOne>
      <Suspense fallback={<div>Loading Characters page..</div>}>
        <BlockTwo />
      </Suspense>
      <BlockThree></BlockThree>
      <BlockFour></BlockFour>
      <BlockFive></BlockFive>
    </div>
  );
};

export default HomePage;
