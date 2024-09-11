import React from 'react'
import DashboardLogin from '../pages/Dashboard/DashboardLogin'


function Auth({ children }) {
    
    const token = localStorage.getItem('token')

  return (
    <>
    {token ? children : <DashboardLogin />}
    </>
  )
}

export default Auth