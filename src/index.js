import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './Index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <div className='bg-global'>
      <App />
    </div>
  </React.StrictMode>
)
