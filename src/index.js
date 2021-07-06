//General imports
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './sass/main.scss'

//Component imports
import Header from './components/header';
import Footer from './components/footer';
import Index from './components/index';

ReactDOM.render(<Header />, document.getElementById("headroot"));
ReactDOM.render (<Index />, document.getElementById("root"));
ReactDOM.render(<Footer />, document.getElementById("footroot"));
