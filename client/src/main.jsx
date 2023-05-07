import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Provider} from "react-redux";
import store from "./redux/store/store.js";
import  "../src/assets/bootstrap.min.css";
import  "../src/assets/style.css";
import  "../src/assets/circle.css"
import  "../src/assets/fm.revealator.jquery.min.css"
import  "../src/assets/skins/yellow.css"
import {BrowserRouter} from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <App/>
          </BrowserRouter>
      </Provider>
  </React.StrictMode>,
)
