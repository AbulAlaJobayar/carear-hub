import React from 'react';
import Navigation from './Component/Navigation';
import { Outlet } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Outlet></Outlet>
    </div>
  );
};

export default App;