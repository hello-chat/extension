import { useContext } from 'react';

import { MoalContext } from './context';

export function useModal() {
  const context = useContext(MoalContext);

  if (!context) {
    throw new Error('Cannot find ModalContext');
  }
  return { ...context };
}
