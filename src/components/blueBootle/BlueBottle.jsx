import "./BlueBottleStyle.scss";
import line from "../../assets/Line 25.png";
import blueBottle from "../../assets/bottleBlue.png";

const BlueBottle = () => {
  return (
    <div className="bottle-wrapper">
      <div className="line">
        <div>
          <img src={line} alt="line" />
        </div>
        <div className="bottle">
          <img src={blueBottle} alt="bottle" />
        </div>
      </div>
    </div>
  );
};

export { BlueBottle };
