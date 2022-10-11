import React from 'react';
import logo from './logo.svg';
import './App.css';

import { AuthContext, AuthProvider } from './context/authContext/AuthContext';
import { Login } from './screens/Login';


const AppState=({children}:any) =>{
  return(
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

const App = () => {
  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;
