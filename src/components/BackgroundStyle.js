import styled, { keyframes } from 'styled-components';




const flash = keyframes`
  from, to {
    opacity: 0.1; /* Starting and ending opacity (less white) */
  }
  30% {
    opacity: 0.3; /* Higher opacity during the flash */
  }
  60% {
    opacity: 0.4; /* Even higher opacity during the flash */
  }
  100% {
    opacity: 0.1; /* Ending opacity (less white) */
  }
`;

export const StormyContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color:rgb(0,0,50);
  position: relative;
  overflow: hidden;
 

`;

export const Effect = styled.div`
  width: 100%;
  height: 100vh;
  position:absolute;
  top:0;
  left:0;
  
  background-color:	rgb(169,169,169);
  animation: ${flash} 500ms ease-in infinite;
`