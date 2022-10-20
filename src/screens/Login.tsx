import React from 'react'
import {useContext} from 'react';
import { useForm } from '../hooks/useForm';
import { AuthContext } from '../context/authContext/AuthContext';
import {useState} from 'react';

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
                            onChange={(e)=>{onChange(e.target.value,'tEmail')}}
                        >
                        </input>
                    </div>
                    <div>
                        <label>
                            Contraseña:
                        </label>
                        <input
                            onChange={(e)=>{onChange(e.target.value,'tPassword')}}
                        >
                        </input>
                    </div>
                </div>
            </div>
            <button
                onClick={() => emailLogIn(tEmail,tPassword)}
            >
                Ingresar
            </button>
        </div>
    </div>
  )
}
