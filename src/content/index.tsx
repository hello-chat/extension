import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import './index.css';
import Modal from '../components/Modal';

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
      <Modal
        style={{
          position: 'fixed',
          left: '2rem',
          bottom: '2rem',
        }}
      >
        <Modal.Contents Component={App} />
        <Modal.Trigger
          Component={({ onOpen }) => <button onClick={onOpen}>open</button>}
        />
      </Modal>
    </React.StrictMode>
  );
}
