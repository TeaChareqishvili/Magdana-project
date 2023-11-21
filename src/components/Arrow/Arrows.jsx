import "./ArrowStyle.scss";
import { IoIosArrowUp } from "react-icons/io";



const Arrows =()=>{
    return(
        <div className="main-arrow-wrapper">
           <div className="arrow-wrapper">
           <IoIosArrowUp className="arrow-first" />
           <IoIosArrowUp  className="arrow-second"/>
           <IoIosArrowUp className="arrow-third" />     
           </div>
        </div>
    )
}

export {Arrows}