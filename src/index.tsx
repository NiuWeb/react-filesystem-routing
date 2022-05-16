import { init } from "./routing";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

async function index() {
  await init();
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(<React.StrictMode><App /></React.StrictMode>);
}

index();