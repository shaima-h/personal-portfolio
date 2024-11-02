import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import "@fontsource/roboto"
import "@fontsource/outfit"
import "@fontsource/bricolage-grotesque"
import "@fontsource/bricolage-grotesque/300.css"; // Light
import "@fontsource/bricolage-grotesque/400.css"; // Regular
import "@fontsource/bricolage-grotesque/500.css"; // Medium
import "@fontsource/bricolage-grotesque/700.css"; // Bold

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
