import styled, { keyframes } from 'styled-components';
import { useState, useEffect } from 'react';


const WaterDrop = ()=>{

    const [drop, setDrop] = useState(true)
    const [puddle, setPuddle] = useState(false)

    useEffect(() => {
     
        const timer = setTimeout(() => {
            setDrop(false);
           
        }, 3000);

        const timerDrop =setTimeout(()=>{
            setPuddle(true)
        },2900)
       
        return () => clearTimeout(timer);
    }, []);

    
    return(
        <Drops>
          {drop && <Drop onAnimationEnd={() => setPuddle(true)} />}
      {puddle && <Puddle />}
        </Drops>
    )
}

export {WaterDrop}


const dropAnimation = keyframes`
  0% {
    transform: translateY(-130px);
    opacity: 0;
    width:28px;
  }
  30%{
    width:28px;
  }
  100% {
    transform: translateY(400px);
    opacity: 1;
    width:40px;
  }
`;

export const Puddle = styled.div`
     background-color:white;
     border-radius:47% 53% 53% 47% / 30% 33% 67% 70%;
     width:200px;
     height:40px;
     position:absolute;
     top:395px;

`

export const Drops = styled.div`
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
    height:100%;

`

export const Drop = styled.div` 
     position:absolute;
     top:-130px;
     background-color:white;
     opacity:0.3;
     border-radius: 48% 52% 46% 54% / 75% 76% 24% 25%;
     width: 40px;
     height: 125px;
     animation: ${dropAnimation} 3s ease-in-out;
     box-shadow:inset 10px 10px 10px rgba(190, 189, 189, 0.05)
                 inset 15px 25px 10px rgba(0,0,0,0.1)
`

