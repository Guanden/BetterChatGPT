import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './main.css';
await import('katex/dist/katex.min.css');

import './i18n';

// Vercel Speed Insights - client-side only
import { injectSpeedInsights } from '@vercel/speed-insights';

injectSpeedInsights();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
