import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './component/Header';
import './App.css'
import RtspCam from './component/RtspCam';

const App = () => {
  return (
    <div className='App'>
      <div className='app-header'>
        <Header />
        {/* <RtspCam /> */}
      </div>
      <div className='app-content'>
        <Outlet />
        {/* app content */}
      </div>
    </div>
  );
};
export default App;


