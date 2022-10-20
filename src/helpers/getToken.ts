import React from 'react'

export const getToken = () => {
    const token = localStorage.getItem('token')
  return token
}
