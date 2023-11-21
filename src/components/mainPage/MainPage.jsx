import "./MainPage.scss";
import { MagdanaTitle } from "../magdanatitle/MagdanaTitle";
import { MountainDry } from "../mountainDry/MountainDry";
import { TextContext } from "../textContext/TextContext";
import { Arrows } from "../Arrow/Arrows";

const MainPage =()=>{

  
     
    return (
        <div className= "day-mode">
         <MagdanaTitle/>
         <MountainDry/>
         <TextContext/>
         <Arrows/>
        </div>
    )
}

export {MainPage}

