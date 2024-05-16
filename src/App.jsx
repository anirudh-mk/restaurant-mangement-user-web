import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MenuScreen from '../src/screens/MenuScreen';
import FoodScreen from './screens/FoodScreen';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: 'restaurant/:id',
    element: <MenuScreen />,
  },
  {
    path: 'restaurant/:id/food/:foodId',
    element: <FoodScreen />,
  },
]);

export default router;
