import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { describe } from 'vitest';

import router from '.';

describe('라우터 테스트', () => {
  describe('1. 랜더링', () => {
    it("라우터를 랜더링 할수 있고, 기본 랜더링 path는 '/'이다.", async () => {
      // render router
      const value = createMemoryRouter(router);
      render(<RouterProvider router={value} />);

      console.log(screen.getByText('PATH:HOME'));
    });
  });

  describe('라우팅', () => {
    it('2. /chat으로 이동할 수 있다.', async () => {
      const Router = createMemoryRouter(router);

      render(<RouterProvider router={Router} />);
      userEvent.setup();
      const node = screen.getAllByRole('link');
      const [chatButton] = node.filter((dom) => {
        dom.textContent === 'chat';
      });
      await userEvent.click(chatButton);

      expect(screen.findByText('PATH:CHATROOM'));
    });

    it('3. /login으로 이동할 수 있다.', async () => {
      const Router = createMemoryRouter(router);
      render(<RouterProvider router={Router} />);
      userEvent.setup();
      // FIXME : 로그인 기능이 구현되면
      const [loginButton] = screen
        .getAllByRole('link')
        .filter((anchor) => anchor.textContent === 'login');

      userEvent.click(loginButton);
      expect(screen.findByText('PATH:LOGIN'));
    });
  });
});
