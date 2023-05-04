import React from 'react';
import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import IndexPage from './pages/IndexPage';

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

function App() {
  return (
    <BrowserRouter>
      <header className='header'>
        <Basket />
        <Search />
        <Navbar />
      </header>
      <main>
        <Categories />
        <Routes>
          <Route path='/' element={<IndexPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
