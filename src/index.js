import React from 'react'
import ReactDOM from 'react-dom'
import './styles/scss/main.scss'
import App from './App'
import FirebaseAuthContextProvider from './context/FirebaseAuthContext'
import BrowseContextProvider from './context/BrowseContext'
import SignUpContextProvider from './context/SignUpContext'

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAuthContextProvider>
      <BrowseContextProvider>
        <SignUpContextProvider>
          <App />
        </SignUpContextProvider>
      </BrowseContextProvider>
    </FirebaseAuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
