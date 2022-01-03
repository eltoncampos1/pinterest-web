import { keyframes } from "styled-components";

export const FADEIN = keyframes`
  from {
    opacity: 0;
    
  }
  to {
    opacity: 1;
   
  }
  `;

export const ROTATE = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
