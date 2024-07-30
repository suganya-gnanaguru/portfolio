import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Dashboard from './components/dashboard.js';
import Header from './components/header.js';
import Introduction from './components/introduction.js';
import Projects from './components/projects.js';
import Contact from './components/contact.js';
//import Footer from './components/footer.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Dashboard />
    <Introduction />
    <Projects />
    <Contact />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
