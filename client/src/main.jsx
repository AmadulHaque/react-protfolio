import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import  "../src/assets/bootstrap.min.css";
import  "../src/assets/style.css";
import  "../src/assets/circle.css"
import  "../src/assets/fm.revealator.jquery.min.css"
import  "../src/assets/skins/yellow.css"
import {BrowserRouter} from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <App/>
      </BrowserRouter>
  </React.StrictMode>,
)
