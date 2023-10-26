import { create } from 'zustand';

interface ModalStore {
  isOpen: boolean;
}

export const modalStore = create<ModalStore>((set) => ({
  isOpen: false,
}));
