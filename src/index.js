import React from 'react'
import ReactDOM from 'react-dom'
import './styles/scss/main.scss'
import App from './App'
import FirebaseAuthContextProvider from './context/FirebaseAuthContext'
import BrowseContextProvider from './context/BrowseContext'
import SignUpContextProvider from './context/SignUpContext'

ReactDOM.render(
  <FirebaseAuthContextProvider>
    <BrowseContextProvider>
      <SignUpContextProvider>
        <App />
      </SignUpContextProvider>
    </BrowseContextProvider>
  </FirebaseAuthContextProvider>,
  document.getElementById('root')
)
