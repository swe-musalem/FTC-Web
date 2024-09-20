import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DashboardApp from './DashboardApp.jsx'
import { Toaster } from "@/components/ui/toaster"


import { BrowserRouter } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
          <App />
          <DashboardApp/>
          <Toaster/>
        </BrowserRouter>
    </React.StrictMode>
)
