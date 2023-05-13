import React from 'react';
import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import ProductPage from './pages/ProductPage';

/**
 * header
 */
import Navbar from './components/header/Navbar';
import Basket from './components/header/Basket';
import Search from './components/header/Search';

/**
 * categories
 */
import Categories from './components/Slide/Categories';
import Menu from './components/header/Menu';

function App() {
  return (
    <BrowserRouter>
      <header className='header'>
        <Basket />
        <Search />
        <Navbar />
        <Menu />
      </header>
      <main>
        <Categories />
        <Routes>
          <Route path='/' element={<IndexPage />} />
          <Route path='/:id' element={<ProductPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
