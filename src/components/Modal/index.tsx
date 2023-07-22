import {
  ComponentType,
  HTMLAttributes,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { MoalContext, ModalContextValue } from './context';
import { useModal } from './useModal';

type ModalProps = HTMLAttributes<HTMLDivElement>;

function Modal({ children, ...props }: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      // document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const value = useMemo<ModalContextValue>(
    () => ({
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      isOpen,
    }),
    [isOpen]
  );
  return (
    <MoalContext.Provider value={value}>
      <div {...props}>{children}</div>
    </MoalContext.Provider>
  );
}

type TriggerProps = {
  Component: ComponentType<{ onOpen: () => void }>;
};

function Trigger({ Component }: TriggerProps) {
  const { isOpen, open } = useModal();

  if (isOpen) {
    return null;
  }
  return <Component onOpen={open} />;
}
type ContentProps = {
  Component: React.ReactNode;
};
function Content({ Component }: ContentProps) {
  const { isOpen } = useModal();

  if (!isOpen) {
    return null;
  }

  return Component;
}

Modal.Trigger = Trigger;
Modal.Contents = Content;

export default Modal;
