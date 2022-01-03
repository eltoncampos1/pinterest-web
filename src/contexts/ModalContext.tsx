/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, ReactNode, useContext } from "react";

type ModalContextProps = {
  isOpen: boolean;
  toggleModal: () => void;
};

export const ModalContext = createContext({} as ModalContextProps);
