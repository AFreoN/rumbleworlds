import { FunctionComponent, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface ScrollToTopProps {}

const ScrollToTop: FunctionComponent<ScrollToTopProps> = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
};

export default ScrollToTop;
