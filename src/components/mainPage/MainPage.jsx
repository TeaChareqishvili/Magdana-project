import "./MainPage.scss";
import { MagdanaTitle } from "../magdanatitle/MagdanaTitle";
import { MountainDry } from "../mountainDry/MountainDry";
import { TextContext } from "../textContext/TextContext";
import { Arrows } from "../Arrow/Arrows";
import { Footer } from "../footer/Footer";

const MainPage =()=>{

  
     
    return (
        <div className= "day-mode">
         <MagdanaTitle/>
         <MountainDry/>
         <TextContext/>
         <Arrows/>
         <Footer/>
        </div>
    )
}

export {MainPage}

