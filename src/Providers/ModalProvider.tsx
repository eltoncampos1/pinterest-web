/* eslint-disable react/jsx-no-constructed-context-values */
import { ReactNode, useState } from "react";
import { ModalContext } from "../contexts";

type ModalProviderProps = {
  children: ReactNode;
};

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const toggleSignupModal = () => setIsSignupModalOpen(!isSignupModalOpen);
  const toggleLoginModal = () => setIsLoginModalOpen(!isLoginModalOpen);

  return (
    <ModalContext.Provider
      value={{
        isSignupModalOpen,
        toggleSignupModal,
        toggleLoginModal,
        isLoginModalOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
