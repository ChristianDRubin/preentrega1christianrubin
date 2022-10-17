import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB3LAR-XPOpLC_QEMPfkWAp5T1t98c0_K4",
  authDomain: "e-commercecoder-83459.firebaseapp.com",
  projectId: "e-commercecoder-83459",
  storageBucket: "e-commercecoder-83459.appspot.com",
  messagingSenderId: "495671021198",
  appId: "1:495671021198:web:15a7a75303cd48a9a203df",
  measurementId: "G-94V234664J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
