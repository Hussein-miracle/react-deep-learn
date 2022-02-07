import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './containers/App'

ReactDOM.render(
  <React.StrictMode>
    <App appTitle = "Person Manager"/>
  </React.StrictMode>,
  document.getElementById('root')
)
