import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRoute from './routes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRoute />
  </React.StrictMode>,
)
