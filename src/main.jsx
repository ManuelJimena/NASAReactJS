import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Apod from './pages/Apod/Apod'
import Gallery from './pages/Gallery/Gallery'
import Mars from './pages/Mars/Mars'
import NotFound from './pages/NotFound/NotFound'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/apod" element={<Apod />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/mars" element={<Mars />} />
        <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
