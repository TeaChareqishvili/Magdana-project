import "./TextContextStyle.scss";
import airShip from "../../assets/airshipBlue.png";

const TextContext = () => {
  return (
    <div className="text-wrapper">
      <div className="left-text">
        <p>
          The origins of gin can be traced back to the Netherlands in the 17th
          century, where it was initially known as genever.
        </p>
      </div>
      <div className="right-text">
        <p>
          gin found its way to England.The British put their unique twist on the
          spirit, leading to the birth of what we now recognize as London Dry
          Gin.
        </p>
      </div>
      <div className="middle-text">
        <p>
          Other botanicals, such as angelica root, orris root, and cardamom,
          play crucial roles in creating the complex flavor profile that defines
          each gin. 
        </p>
        <p>Other botanicals, such as angelica root, orris root, and
          cardamom, play crucial roles in creating the complex flavor profile
          that defines each gin.</p>
      </div>
      <div className="air-ship">
        <img src={airShip} alt="airship"/>
      </div>
    </div>
  );
};

export { TextContext };
