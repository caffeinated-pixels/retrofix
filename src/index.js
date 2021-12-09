import React from 'react'
import ReactDOM from 'react-dom'
import './styles/scss/main.scss'
import App from './App'
import FirebaseAuthContextProvider from './context/FirebaseAuthContext'
import SignUpContextProvider from './context/SignUpContext'

ReactDOM.render(
  <FirebaseAuthContextProvider>
    <SignUpContextProvider>
      <App />
    </SignUpContextProvider>
  </FirebaseAuthContextProvider>,
  document.getElementById('root')
)
