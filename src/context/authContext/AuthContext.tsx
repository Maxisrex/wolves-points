import React, { createContext, useReducer, useState } from 'react'
import wolvesApi from '../../api/WolvesApi';
import { AuthReducer, AuthState } from './AuthReducer';
import { loginData } from '../../interface/AuthInterface';

type AuthContextProps = {
  AuthLogin:string;
  Auth:string;
  user:any;
  Nombre:any;
  token:string|null;
  modalVisible:boolean;
  status: 'checking'|'autheticated'|'not-autheticated';
  emailLogIn:(tEmail:string,tPassword:string) => void; 
  logOut:() => void;
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

    const emailLogIn = async(tEmail:string,tPassword:string) => {
      console.log('Si entramos', tEmail, tPassword)
      try {
        const resp = await wolvesApi.post('/auth/signIn',{
          tEmail,
          tPassword
        });
        console.log('resp', resp.data.token)
        console.log(state)
        dispatch({
          type:'singUp',
          payload:{
            token:resp.data.token
          }
        });
        await localStorage.setItem('token',resp.data.Token)
      } catch (error) {
        console.log(error)
      }
      
    }

    const logOut = async () =>{
    
    }


    const ModalCloseOrOpen = () => {
        setModalVisible(!modalVisible)
    }



  return (
    <AuthContext.Provider value={{
      ...state,
      AuthLogin,
      Auth,
      Nombre,
      modalVisible,
      emailLogIn,
      logOut,
      ModalCloseOrOpen,
    }}>
      {children}
    </AuthContext.Provider>
  )
}
