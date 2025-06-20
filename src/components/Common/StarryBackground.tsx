import { FunctionComponent, useEffect } from "react";

interface StarryBackgroundProps {}

const StarryBackground: FunctionComponent<StarryBackgroundProps> = () => {
  useEffect(() => {
    //estrelas
    var style = ["style1", "style2", "style3", "style4"];

    function getRandomArbitrary(min: number, max: number) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    //meteoros

    var numeroAleatorio = 5000;

    setTimeout(function () {
      carregarMeteoro();
    }, numeroAleatorio);

    function carregarMeteoro() {
      setTimeout(carregarMeteoro, numeroAleatorio);
      numeroAleatorio = getRandomArbitrary(5000, 10000);
      var meteoro =
        "<div class='meteoro " + style[getRandomArbitrary(0, 4)] + "'></div>";
      document.getElementsByClassName("chuvaMeteoro")[0].innerHTML = meteoro;
      setTimeout(function () {
        document.getElementsByClassName("chuvaMeteoro")[0].innerHTML = "";
      }, 1000);
    }
  }, []);
  return (
    <>
      <div className="gradient-overlay"></div>
      <div className="stars-background">
        <div className="noite"></div>
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="chuvaMeteoro"></div>
      </div>
    </>
  );
};

export default StarryBackground;
