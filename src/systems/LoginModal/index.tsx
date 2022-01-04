import { Modal } from "../core";

type LoginModalProps = {
  isLoginModalOpen: boolean;
  onLoginModalClose: () => void;
};

export const LoginModal = ({
  isLoginModalOpen,
  onLoginModalClose,
}: LoginModalProps) => {
  return (
    <Modal
      onOverlayClick={onLoginModalClose}
      isOpen={isLoginModalOpen}
      onClose={onLoginModalClose}
    >
      <div>Login</div>
    </Modal>
  );
};
