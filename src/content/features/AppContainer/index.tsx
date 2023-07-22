import styled from '@emotion/styled';
import { ReactNode, useEffect, useRef } from 'react';

import { useModal } from '../../../components/Modal/useModal';

type AppContainerProps = {
  children: ReactNode;
};

const AppContainer = ({ children }: AppContainerProps) => {
  const ref = useRef<HTMLDetailsElement>(null);
  const { close } = useModal();

  useEffect(() => {
    const outSideClick = (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current?.contains(e.target as Node)) {
        console.log('click outside');
        close();
      }
    };
    if (ref.current) {
      addEventListener('mousedown', outSideClick);
    }
    return () => {
      console.log('unmount');
      removeEventListener('mousedown', outSideClick);
    };
  }, [close]);

  return <StyledContainer ref={ref}>{children}</StyledContainer>;
};

export default AppContainer;

const StyledContainer = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 280px;
  height: 500px;
  border-radius: 28px;
  border: 5px solid transparent;
  background-image: linear-gradient(white, white),
    radial-gradient(
      circle,
      rgba(0, 0, 0, 1) 0%,
      rgba(90, 90, 90, 1) 70%,
      rgba(0, 0, 0, 1) 100%
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-sizing: content-box;
  overflow: hidden;
`;
