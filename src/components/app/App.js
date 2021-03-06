import React, { useState, useEffect } from 'react'
import netlifyIdentity from 'netlify-identity-widget'

import EmployeeList from '../employeeList/EmployeeList'
import AddEmployee from '../addEmployee/AddEmployee'
import FilterEmployees from '../filterEmployee/FilterEmployees'

import logo from './adattivo.png'

// Helpers
import { loginUser, logoutUser } from '../identityActions'

// Styles
import './App.css'

const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser')
    if (currentUser) {
      setUser(currentUser)
    } else {
      loginUser()
    }
    netlifyIdentity.on('login', currentUser => setUser({ currentUser }, loginUser()))
    netlifyIdentity.on('logout', () => setUser( null, logoutUser() ))
  }, [user])

  // Open Identity Widget
  const handleLogIn = () => {
    netlifyIdentity.open()
  }

  // Close Identity Widget
  const handleLogOut = () => {
    netlifyIdentity.logout()
  }

  return (
    <div className="App animated fadeIn">
      {user ? (
        <div className='App'>
          <button
            className="tirtiaryBtn logout"
            onClick={handleLogOut}
          >
            Logout
          </button>
          <FilterEmployees />
          <AddEmployee />
          <EmployeeList />
        </div>
      ) : (
        <div className='App'>
          <div className='Login welcome-info'>
            <img 
              className='logo'
              src={logo}
              alt='adattivo logo, visit: http://adattivo.co'
            />
            <h1> Employees Challenge</h1>
            <h3>Please Login to Continue</h3>
            <button
              className="tirtiaryBtn"
              onClick={handleLogIn}
            >
              Login
            </button>
          </div>
          <span className='background-shape' />
          <span className='background-shape-two' />
        </div>
      )}
    </div>
  )
}

export default App
