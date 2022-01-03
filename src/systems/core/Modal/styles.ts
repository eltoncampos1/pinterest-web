import styled from "styled-components";

type IModalContent = {
  size: string;
};

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.colors.overlay};
  zindex: 10;
`;

export const ModalContent = styled.div<IModalContent>`
  position: fixed;
  top: 50%;
  left: 50%;
  width: ${(props) => props.size};
  height: 65vh;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.colors.white_primary};
  zindex: 10;
  box-shadow: rgb(0 0 0 / 45%) 0px;
  padding: 2rem;

  svg {
    position: relative;
    left: 98%;
    top: -15px;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;
