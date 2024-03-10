import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes';

const App = () => (
  <div>
        <RouterProvider router={router} />
  </div>
);

export default App;
