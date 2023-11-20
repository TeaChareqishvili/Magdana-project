import "./MagdanaTitleStyle.scss";
import magdanaFace from "../../assets/magdanaFace 1.png";
import magdana from "../../assets/fontGold.png"

const MagdanaTitle = () => {

  return <div className="magdana-wrapper">
           <div className="title">
             <img  src={magdanaFace} alt="magdana-face"/>
             <img className="title" src={magdana} alt="title"/>
           </div>
  </div>;
};

export { MagdanaTitle };
