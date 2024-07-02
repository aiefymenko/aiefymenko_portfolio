import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Adjust the path to your main App component
import './index.css'; // Adjust the path to your CSS file if needed

const container = document.getElementById('root'); // The root element in your HTML file
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);