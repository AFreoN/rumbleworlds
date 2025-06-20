import StarryBackground from "components/Common/StarryBackground";
import { FunctionComponent, useEffect } from "react";
import { useNavigate } from "react-router";

interface NotFoundPageProps {}

const NotFoundPage: FunctionComponent<NotFoundPageProps> = () => {
  useEffect(() => {
    document.title = "Rumble Worlds - 404";
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <StarryBackground />{" "}
      <div
        className="container text-white not-found-wrapper position-relative d-flex align-items-center justify-content-center"
        style={{ paddingTop: "10rem", paddingBottom: "10rem" }}
      >
        <div className="row">
          <div className="col-md-7 mx-auto text-center">
            <h1 className="title heading-2 lilita-font shadow-2 text-uppercase text-red">
              Uh Oh! You're in uncharted territory.
            </h1>
          </div>
          <div className="col-md-8 mx-auto text-center">
            <div className="subtitle-1 text-white inter-font semibold shadow-p">
              The page you are looking for is no longer available or has been
              moved.
            </div>
          </div>
          <div
            className="col-md-8 mx-auto text-center back-link"
            style={{ marginTop: "30px" }}
          >
            <div
              className="heading-7 text-green inter-font semibold shadow-p text-uppercase"
              onClick={() => navigate("/")}
            >
              Back to Homepage
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
