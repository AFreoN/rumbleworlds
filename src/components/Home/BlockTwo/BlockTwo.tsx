import { FunctionComponent, Suspense, lazy } from "react";
import "./block-two.scss";
// import background from "assets/home/block-2/background.png";
import char01 from "assets/home/block-2/char-01.png";
import char02 from "assets/home/block-2/char-02.png";
import char03 from "assets/home/block-2/char-03.png";
import char04 from "assets/home/block-2/char-04.png";
import char05 from "assets/home/block-2/char-05.png";
import char06 from "assets/home/block-2/char-06.png";
import char07 from "assets/home/block-2/char-07.png";
import char08 from "assets/home/block-2/char-08.png";
import charbg from "assets/home/block-2/char-bg.png";
// import join from "assets/home/block-2/add-collection.svg";
// import joinlg from "assets/home/block-2/add-collection-lg.svg";
// import mainChar from "assets/home/block-2/main-char.png";
// import Characters from "../Characters/Characters";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import changeCharacter from "actions/character-select.action";
// import { useNavigate } from "react-router-dom";
interface BlockTwoProps {}

const Characters = lazy(() => import("../Characters/Characters"));

const BlockTwo: FunctionComponent<BlockTwoProps> = () => {
  const character = useSelector(
    (state: any) => state.characterSelect.character,
    shallowEqual
  );
  const dispatch = useDispatch();

  const handleSelectCharacter = (char: number) => {
    console.log(character);
    dispatch(changeCharacter(char));
  };

  return (
    <div className="block-2">
      {/* <img className="background" src={background} alt="background" /> */}
      <div className="block-wrapper container mx-auto">
        <div className="row justify-content-end">
          <div
            className="col-12 col-lg-6 col-xl-7 h-100 d-none d-lg-block"
            id="character_model"
          >
            <Suspense fallback={<div>Loading Characters...</div>}>
              <Characters />
            </Suspense>
            {/* <img
              className="main-char char img-fluid"
              src={mainChar}
              alt="main-char"
            /> */}
          </div>
          <div className="col-12 col-lg-6 col-xl-5">
            <h4 className="lilita-font heading-4 text-red shadow-4">PLAY</h4>
            <h2 className="lilita-font heading-2 text-white shadow-2">
              YOUR FAVORITE <br /> NFT CHARACTERS
            </h2>
            <p className="inter-font body-1 semibold text-white shadow-p">
              Play in Rumble Worlds as your favourite game ready 3D NFTs, or
              showcase your NFT collection! Here's some game ready collections
              you can play as with new partnerships being added daily.
            </p>
            <div className="character-select">
              <div
                className={
                  "character-board" + (character === 0 ? " active" : "")
                }
                onClick={() => handleSelectCharacter(0)}
              >
                <img className="char01 board" src={charbg} alt="char01" />
                <img className="char01 char" src={char01} alt="char01" />
                <div className="lilita-font heading-7 text-white shadow-2 character-name">
                  RUMBLERS
                </div>
              </div>
              <div
                className={
                  "character-board" + (character === 4 ? " active" : "")
                }
                onClick={() => handleSelectCharacter(4)}
              >
                <img className="char05 board" src={charbg} alt="char04" />
                <img className="char05 char" src={char05} alt="char05" />
                <div className="lilita-font heading-7 text-white shadow-2 character-name">
                  SOLARIANS
                </div>
              </div>
              <div
                className={
                  "character-board" + (character === 1 ? " active" : "")
                }
                onClick={() => handleSelectCharacter(1)}
              >
                <img className="char02 board" src={charbg} alt="char02" />
                <img className="char01 char" src={char02} alt="char02" />
                <div className="lilita-font heading-7 text-white shadow-2 character-name">
                  SOLARMY
                </div>
              </div>

              <div
                className={
                  "character-board" + (character === 2 ? " active" : "")
                }
                onClick={() => handleSelectCharacter(2)}
              >
                <img className="char03 board" src={charbg} alt="char03" />
                <img className="char03 char" src={char03} alt="char03" />
                <div className="lilita-font heading-7 text-white shadow-2 character-name">
                  SOLIENS
                </div>
              </div>
              <div
                className={
                  "character-board" + (character === 3 ? " active" : "")
                }
                onClick={() => handleSelectCharacter(3)}
              >
                <img className="char04 board" src={charbg} alt="char04" />
                <img className="char04 char" src={char04} alt="char04" />
                <div className="lilita-font heading-7 text-white shadow-2 character-name">
                  SUNKS
                </div>
              </div>

              <div
                className={
                  "character-board unknown no-click" +
                  (character === 5 ? " active" : "")
                }
                // onClick={() => handleSelectCharacter(5)}
              >
                <img className="char06 board" src={charbg} alt="char06" />
                <img className="char06 char" src={char06} alt="char06" />
              </div>
              <div
                className={
                  "character-board unknown  no-click" +
                  (character === 6 ? " active" : "")
                }
                // onClick={() => handleSelectCharacter(6)}
              >
                <img className="char07 board" src={charbg} alt="char06" />
                <img className="char07 char" src={char07} alt="char07" />
              </div>
              <div
                className="character-board  no-click"
                // onClick={() =>
                //   window.open("https://forms.gle/KFTZ5BnihrzMe4NdA")
                // }
                // onClick={() => navigate("/partners")}
              >
                <img className="char08 board" src={char08} alt="char08" />
                {/* <img
                  className="join-rw d-none d-xxl-block"
                  src={join}
                  alt="Join Rumbleworlds"
                /> */}
                {/* <img
                  className="join-rw d-xxl-none"
                  src={joinlg}
                  alt="Join Rumbleworlds"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockTwo;
