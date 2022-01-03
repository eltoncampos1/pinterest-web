import { useDisclosure } from "./hooks";
import { Home } from "./pages/Home";
import { Modal } from "./systems/core";

const App = () => {
  const { isOpen, toggleModal } = useDisclosure();

  return (
    <>
      <Home />
      <Modal onClose={toggleModal} size="sm" isOpen={isOpen}>
        funcionando
      </Modal>
    </>
  );
};

export default App;
