// es6 modules
// import { Component } from 'react';
// could be use for ios, canvas, dom etc
import React from 'react';
// {} if you want to cherry pick a method from the package
import { render } from 'react-dom';
import StorePicker from './components/StorePicker';
import App from './components/App';
import './css/style.css';
// needs a DOM element to mount onto the page
render(<App/>, document.querySelector('#main'));


// create react app does all the under the hood webpack
