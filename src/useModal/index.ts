import { useState } from 'react';

const useModal = (): [() => void, (open: boolean) => void] => {
  const [openModal, setOpenModal] = useState(false);

  const Modal = () => setOpenModal(true);

  return [Modal, setOpenModal];
};

export default useModal;
