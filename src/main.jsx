import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Provider} from 'react-redux';
import store from './redux/store/index'
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_APP_API || "http://localhost:3001"

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
)
