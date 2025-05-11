import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import WeatherApp from './WeatherApp.tsx'
//import Portfolio from './Portfolio.tsx'
import Dport from './dport.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Dport/>
  </StrictMode>,
)
