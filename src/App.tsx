import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/Common/NavBar";
import Footer from "./components/Common/Footer";
import routes from "./routes";
// import CommonPopup from "components/Common/CommonPopup";
import "animate.css/animate.min.css";
import ScrollToTop from "components/Common/ScrollToTop";
import React, { useEffect } from "react";
import PagePreloader from "components/Common/PagePreloader";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { stopLoading } from "actions/loading.action";
import GA4React from "ga-4-react";

function App() {
  useEffect(() => {
    try {
      setTimeout((_) => {
        const ga4react = new GA4React("G-NYG0X97G6V");
        ga4react.initialize().then(
          (ga4) => {
            ga4.pageview(window.location.pathname + window.location.search);
          },
          (err) => {
            console.error(err);
          }
        );
      }, 1000);   //4000
    } catch (err) {
      console.error(err);
    }
  }, []);

  const loading = useSelector(
    (state: any) => state.loading.loading,
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => dispatch(stopLoading()), 1500);  //4000
  });

  return (
    <React.Fragment>
      {loading ? <PagePreloader /> : null}
      <div className="App">
        <Router>
          <ScrollToTop>
            <NavBar />
            <Routes>
              {routes.map((route, index) => (
                <Route {...route} key={index} />
              ))}
            </Routes>
            <Footer />
          </ScrollToTop>
        </Router>
        {/* <CommonPopup position="center" size="auto" close>
          Adopting your Rumbler
        </CommonPopup> */}
      </div>
    </React.Fragment>
  );
}

export default App;
