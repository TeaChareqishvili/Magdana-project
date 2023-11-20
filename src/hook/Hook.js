import { useState, useEffect } from "react";

const UseDayNightMode = ()=>{

    const date = new Date()
   
    const hours = date.getHours()
   
    const [night, setNight] = useState(false)

    useEffect(() => {
      
       if (hours >18 || hours < 6) {
         setNight(true);
       } else {
         setNight(false);
       }
     }, [hours]);

     return night;

}

export {UseDayNightMode}