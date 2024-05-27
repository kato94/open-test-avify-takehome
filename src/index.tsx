import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';
import '@unocss/reset/tailwind-compat.css';
import 'uno.css';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('reactMountPoint');
  const root = createRoot(container);
  root.render(<App />);
});
