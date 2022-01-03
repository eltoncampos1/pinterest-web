import { createContext, ReactNode } from "react";
import { ModalProvider } from ".";

const AppContext = createContext({});

export const AppProvider = (children: ReactNode) => {
  return (
    <AppContext.Provider value={false}>
      <ModalProvider>{children}</ModalProvider>
    </AppContext.Provider>
  );
};
