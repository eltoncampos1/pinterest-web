import { useContext } from "react";
import { ModalContext } from "../contexts";

export const useDisclosure = () => useContext(ModalContext);
