import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const rootElement = document.getElementById('root') as HTMLElement

const root = ReactDOM.createRoot(rootElement as Element)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
