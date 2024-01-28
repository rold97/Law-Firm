import { create } from "zustand";

export const useModalStore = create((set) => ({
  modalIsOpen: false,
  setModalIsOpen: () => set((state) => ({ modalIsOpen: !state.modalIsOpen })),
}));
