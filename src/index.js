import React from 'react'
import ReactDOM from 'react-dom'
import './styles/scss/main.scss'
import App from './App'
import SignUpContextProvider from './context/SignUpContext'

ReactDOM.render(
  <SignUpContextProvider>
    <App />
  </SignUpContextProvider>,

  document.getElementById('root')
)
