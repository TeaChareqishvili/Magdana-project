
import { WaterDrop } from "../dropAnimation/WaterDrop";
import { Effect, StormyContainer} from "./BackgroundStyle";
import { useState,useEffect } from "react";

const Bakground = ()=>{

    const [storm, setStorm] = useState(true)

   
  
    useEffect(() => {
        
        // const startTimer =setTimeout(()=>{
        //     setStorm(true)
        // },2000)
      
        const timer = setTimeout(() => {
            setStorm(false);
        }, 4000);

       
        return () => clearTimeout(timer);
    }, []);

   
    return(
       
        <StormyContainer>
            {storm ? <Effect/> :<WaterDrop/>} 
       
        </StormyContainer>
    )
}

export {Bakground}