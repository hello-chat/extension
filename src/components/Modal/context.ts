import { createContext } from 'react';

export type ModalContextValue = {
  open: () => void;
  close: () => void;
  isOpen: boolean;
};

export const MoalContext = createContext<ModalContextValue>(
  {} as ModalContextValue
);
