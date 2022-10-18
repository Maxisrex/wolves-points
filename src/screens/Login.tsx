import React from 'react'
import {useContext} from 'react';
import { loginResponde } from '../interface/AuthInterface';
import { useForm } from '../hooks/useForm';
import { AuthContext } from '../context/authContext/AuthContext';

export const Login = () => {

    const {emailLogIn} = useContext(AuthContext)


    const {tEmail,tPassword,onChange} = useForm({
        tEmail:'',
        tPassword:''
    });

  return (
    <div>
        <div>
            <img/>
            <h1>
                Wolves Points
            </h1>
        </div>
        <div>
            <div>
                <div>

                </div>
                <div>
                    <div>
                        <label>
                            correo:
                        </label>
                        <input
                            onChange={(value)=>{onChange(value,'tEmail')}}
                        >
                        </input>
                    </div>
                    <div>
                        <label>
                            Contraseña:
                        </label>
                        <input
                            onChange={(value)=>{onChange(value,'tPassword')}}
                        >
                        </input>
                    </div>
                </div>
            </div>
            <button
                onClick={emailLogIn(
                    tEmail,
                    tPassword
                )}
            >
                Ingresar
            </button>
        </div>
    </div>
  )
}
