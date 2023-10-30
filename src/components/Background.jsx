
// import { MainBackground } from "./BackgroundStyle"
import { Effect, StormyContainer} from "./BackgroundStyle";
import { useState,useEffect } from "react";

const Bakground = ()=>{

    const [storm, setStorm] = useState(false)

   
  
    useEffect(() => {
        
        const startTimer =setTimeout(()=>{
            setStorm(true)
        },2000)
      
        const timer = setTimeout(() => {
            setStorm(false);
        }, 4000);

       
        return () => clearTimeout(timer);
    }, []);

   
    return(
       
        <StormyContainer>
            {storm &&  <Effect/> }
        
        </StormyContainer>
    )
}

export {Bakground}