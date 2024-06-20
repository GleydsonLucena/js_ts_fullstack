import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/global.css'

import Home from './components/Home'
import About from './components/About'
import Menu from './components/Menu'
import Post from './components/Post'
import Redirect from './components/Redirect'
import NotFound from './components/NotFound'

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Menu/>
      <Routes>
          <Route path='/' element={<Home />}> </Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/post' element={<Post />}></Route>
          <Route path='/post/:id' element={<Post />}></Route>
          <Route path='/redirect' element={<Redirect />}></Route>
          <Route path='/*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
