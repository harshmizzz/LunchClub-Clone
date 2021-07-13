import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './Components/Features/userSlice'
import Login from './Components/LoginPage/Login'
import Header from './Components/MainPage/Header'
import Main from './Components/MainPage/Main'

function PageSelector() {
    const user = useSelector(selectUser)
    return (
        <div>
             {!user ? (
          <Login />
        ) : (
          <div>
            <Header /> <Main />
          </div>
        )}
        </div>
    )
}

export default PageSelector
