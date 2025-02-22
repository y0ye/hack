import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, Router, BrowserRouter } from 'react-router-dom';
import AppRoutes from '../src/constants/routes.tsx';
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>,
)
