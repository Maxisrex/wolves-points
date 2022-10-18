import React, { createContext, useReducer, useState } from 'react'
import wolvesApi from '../../api/WolvesApi';
import { AuthReducer, AuthState } from './AuthReducer';

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

    const emailLogIn = async() => {
      const resp = await wolvesApi.post('/auth/singIn',{
        "tEmail":
        "tPassword"
      })
      dispatch({
        type:'singUp',
        payload:{
          token:resp.data.token
        }
      })
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
