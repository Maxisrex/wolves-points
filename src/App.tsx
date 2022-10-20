import React from 'react';
import logo from './logo.svg';
import {useContext} from 'react';
import './App.css';

import { AuthContext, AuthProvider } from './context/authContext/AuthContext';
import { Login } from './screens/Login';
import { Home } from './screens/Home';
import { Route,Routes } from 'react-router-dom';
import { ProtectdRoute } from './helpers/ProtectdRoute';



const AppState=({children}:any) =>{
  return(
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

const App = () => {


  return (
    <div className='App'>
      <AppState>
        <Routes>
          <Route path='/' element={
            <ProtectdRoute>
              <Home/>
            </ProtectdRoute>
          }>
          <Route path='login' element={<Login/>}></Route>
          </Route>
        </Routes>
      </AppState>
    </div>
  );
}

export default App;
