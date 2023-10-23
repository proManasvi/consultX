import React from 'react';
import Navbar from '../components/Navbar/Navbar.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <div>
      <Navbar />
      <ToastContainer />
    </div>
  )
};
