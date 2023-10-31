import styled, { keyframes } from 'styled-components';
import { useState } from 'react';


const WaterDrop = ()=>{

    const [drop, setDrop] = useState(true)
    return(
        <Drops>
            {drop && <Drop/>}
         
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

`