import React from 'react';
import ReactDOM from 'react-dom';
import { MainRoutes } from './components/routers/MainRoutes';
//import { PortfolioApp } from './PortfolioApp';
import './styles/styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <MainRoutes />
  </React.StrictMode>,
  document.getElementById('root')
);
