import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Index from './Index'
import CustomCursor from './CustomCursor'
import { inject } from '@vercel/analytics';
 
inject();
//import CursorTrail from './CursorTrail'
//import WeatherApp from './WeatherApp.tsx'
//import Portfolio from './Portfolio.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CustomCursor/>
    <Index/>
  </StrictMode>,
)
