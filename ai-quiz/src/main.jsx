import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // No need for .jsx in the import path
import './index.css'; // Ensure this file contains relevant styles

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
