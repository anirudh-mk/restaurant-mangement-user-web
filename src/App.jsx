import React from 'react';
import MenuScreen from '../src/screens/MenuScreen';
import FoodScreen from './screens/FoodScreen';
import { Route, Router, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route path='restaurant/:id' element={<MenuScreen />} />
        <Route path='restaurant/:id/food/:id' element={<FoodScreen />} />
      </Routes>
    </>
  )
}

export default App