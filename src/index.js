import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { UserContextProvider } from "./user-context"
import './index.css';
import App from './App';

const AppWithRouter = <Router><App /></Router>
const AppWithProvider = <UserContextProvider>{AppWithRouter}</UserContextProvider>

ReactDOM.render(
    AppWithProvider,
  document.getElementById('root')
);
