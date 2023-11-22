import "./FooterStyle.scss";
import { ImFacebook2 } from "react-icons/im";
import { FaSquareInstagram } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="copy-right">
        <p>Copyright©2023 LTD Magdana</p>
      </div>
      <div className="soc-media">
        <ImLinkedin className="media" />
        <FaSquareInstagram  className="instagram" />
        <ImFacebook2 className="media" />
      </div>
    </div>
  );
};

export { Footer };
