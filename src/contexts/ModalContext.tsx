/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext } from "react";

type ModalContextProps = {
  isSignupModalOpen: boolean;
  isLoginModalOpen: boolean;
  toggleSignupModal: () => void;
  toggleLoginModal: () => void;
};

export const ModalContext = createContext({} as ModalContextProps);
