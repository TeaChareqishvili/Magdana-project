import styled, { keyframes } from 'styled-components';




const flash = keyframes`
  from, to {
    opacity: 0.1; 
  }
  30% {
    opacity: 0.3;
  }
  60% {
    opacity: 0.4; 
  }
  100% {
    opacity: 0.1; 
  }
`;

export const StormyContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image:url(././magdana.jpeg);
  background-repeat:no-repeat;
  background-position:center;
  background-size:cover;
  position: relative;
  overflow: hidden;
 
`;

export const Effect = styled.div`
  width: 100%;
  height: 100vh;
  position:absolute;
  top:0;
  left:0;
   background-color:#20253a;
  animation: ${flash} 1s ease-in infinite;
`