import React from 'react'
import ReactDOM from 'react-dom/client'
//import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App'

/*const rootElement = */ ReactDOM.createRoot(document.getElementById('root'))
  //const root = createRoot(rootElement)

  .render(
    <Router>
      <App />
    </Router>
  )
