import { useState } from 'react';

const useModal = (): [(open: boolean) => void] => {
  const [openModal, setOpenModal] = useState(false);

  return [setOpenModal];
};

export default useModal;
