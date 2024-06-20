import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/global.css'

import Home from './components/Home'
import About from './components/About'
import Menu from './components/Menu'
import Posts from './components/Posts'
import Redirect from './components/Redirect'
import NotFound from './components/NotFound'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from './components/Post'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/posts' element={<Posts />}></Route>
        {/* <Route path='/posts/:id' element={<Posts />}></Route> */}
        <Route path='/posts' element={<Posts />}>
          <Route path=':id' element={<Post/>}></Route>
        </Route>
        <Route path='/redirect' element={<Redirect />}></Route>
        <Route path='/*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
