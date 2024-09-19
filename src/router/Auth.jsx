import React from 'react'
import DashboardLogin from '../pages/Dashboard/DashboardLogin'


function Auth({ children }) {

  const role = localStorage.getItem('role')
  const token = localStorage.getItem('token')

  return (
    <>
      {token && role === 'ADMIN' ? children : <DashboardLogin />}
    </>
  )
}

export default Auth