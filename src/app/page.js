import React from 'react';
import Navbar from '../components/Navbar/Navbar.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateSession from '../components/CreateSession/CreateSession.js';

export default function Home() {
  return (
    <div>
      <Navbar />
      <CreateSession />
      <ToastContainer />
    </div>
  )
};
