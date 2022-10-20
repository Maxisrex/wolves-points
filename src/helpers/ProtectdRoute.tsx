import React from 'react'
import { getToken } from './getToken'
import { Navigate } from "react-router-dom"

export const ProtectdRoute = ({children}:any) => {
    const sesion = getToken()
  if (!sesion) return <Navigate to="/login" />
  return <>{children}</>
}
