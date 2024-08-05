import React from 'react'
import Home from './pages/home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/about'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Wishlist from './pages/wishilst'
import Catalog from './pages/catalog'
import Cart from './pages/cart'
import Detail from './pages/detail'
import News from './pages/news'

const App:React.FC = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/wishes' element={<Wishlist />}/>
        <Route path='/catalog' element={<Catalog />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/product/:id' element={<Detail />}/>
        <Route path='/news' element={<News />}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App