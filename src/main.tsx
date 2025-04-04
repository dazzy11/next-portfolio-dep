import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import WeatherApp from './WeatherApp.tsx'
import Portfolio from './Portfolio.tsx'
//import Sample from './sample.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Portfolio/>
  </StrictMode>,
)
