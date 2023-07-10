import React from 'react';
import { createRoot } from 'react-dom/client';

import ContentApp from './ContentApp';

const root = document.createElement('div');
document.body.appendChild(root);
root.id = 'hello-chat-root';

const BLACK_LISTS: Array<RegExp> = [];
const isBlack = BLACK_LISTS.some(
  (blackItem) => !blackItem.test(window.location.href)
);
if (!isBlack) {
  createRoot(root).render(
    <React.StrictMode>
      <ContentApp />
    </React.StrictMode>
  );
}
