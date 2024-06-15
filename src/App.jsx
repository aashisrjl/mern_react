import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/home/Home';
import SingleBook from './pages/singleBook/SingleBook';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<h1>about page</h1>} />
      <Route path='/book/:id' element={<SingleBook/>} />
    </Routes>
    </BrowserRouter>

    
  )
}

export default App
