import { RouteObject } from 'react-router-dom';

import * as pages from '../pages';

const router: RouteObject[] = [
  {
    path: '/',
    Component: pages.Layout,
    children: [
      {
        path: '',
        Component: pages.Home,
      },
      {
        path: 'login',
        Component: pages.Login,
      },
      {
        path: 'logout',
        Component: pages.Logout,
      },
      {
        path: 'Chat',
        children: [
          {
            path: '',
            Component: pages.Chat,
          },
          {
            path: ':user',
            Component: pages.ChatRoom,
          },
        ],
      },
      {
        path: 'settings',
        Component: pages.Settigs,
      },
    ],
  },
];

export default router;
