import "./MagdanaTitleStyle.scss";
import magdanaFace from "../../assets/magdanaFace 1.png";
import magdana from "../../assets/fontGold.png";
// import { BlueBottle } from "../blueBootle/BlueBottle";


const MagdanaTitle = () => {
  return (
    <div className="magdana-wrapper">
      <img src={magdanaFace} alt="magdana-face" />
      <div className="magdana-title">
        <img src={magdana} alt="magdana-title" />
      </div>
      {/* <BlueBottle/> */}
    </div>
  );
};

export { MagdanaTitle };
