import { FunctionComponent } from "react";
import rwLogo from "assets/logo-lg.png";

const PagePreloader: FunctionComponent = (props) => {
  return (
    <div className="page-preloader">
      <div className="wrapper">
        <img src={rwLogo} alt="Rumble Worlds" className="img-fluid rw-logo" />
        <div className="loader">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
        </div>
        {/* <div className="loading text-white lilita-font shadow-2 text-uppercase text-center heading-7">
          Loading..
        </div> */}
      </div>
    </div>
  );
};

export default PagePreloader;
