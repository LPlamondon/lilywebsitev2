//General imports
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './sass/main.scss'

//Component imports
import Header from './components/header';
import Footer from './components/footer';
import Index from './components/index';
import Intro from './components/intro';
import Work from './components/work';
import About from './components/about';
import Contact from './components/contact';



ReactDOM.render (<App />, document.getElementById("root"));
