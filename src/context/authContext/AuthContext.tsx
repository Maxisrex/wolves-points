import React, { createContext, useReducer, useState } from 'react'
import { AuthReducer, AuthState } from './AuthReducer';

type AuthContextProps = {
  AuthLogin:string;
  Auth:string;
  user:any;
  Nombre:any;
  token:string|null;
  modalVisible:boolean;
  status: 'checking'|'autheticated'|'not-autheticated';
  emailLogIn:() => void; 
  recoveryAcount : () => void;
  goBackStart:() => void;
  logIn:() => void;
  logInGoogle:() => void;
  logOut:() => void;
  logInchange:() => void;
  ModalCloseOrOpen:() => void;
}

const authInitialState : AuthState ={
  status:'checking',
  token:null,
  user:null,
  errorMesage:''
}

export const AuthContext = createContext({} as AuthContextProps)


export const AuthProvider = ({children}:any) => {


  const [AuthLogin, setAuthLogin] = useState('home')
    const [Nombre, setNombre] = useState()
    const [Auth, setAuth] = useState('false')
    const [state, dispatch] = useReducer(AuthReducer, authInitialState);
    const [modalVisible, setModalVisible] = useState(false)

    const emailLogIn = () => {
    }

    const recoveryAcount = () => {
    }

    const goBackStart = () => {
    }
    const logIn = () =>{

    }
    const logInchange = () =>{

    }
    const logOut = async () =>{
    
    }


    const ModalCloseOrOpen = () => {
        setModalVisible(!modalVisible)
    }

    const logInGoogle = async () =>{
       
    }


  return (
    <AuthContext.Provider value={{
      ...state,
      AuthLogin,
      Auth,
      Nombre,
      modalVisible,
      emailLogIn,
      recoveryAcount,
      goBackStart,
      logIn,
      logInchange,
      logInGoogle,
      logOut,
      ModalCloseOrOpen,
    }}>
      {children}
    </AuthContext.Provider>
  )
}
