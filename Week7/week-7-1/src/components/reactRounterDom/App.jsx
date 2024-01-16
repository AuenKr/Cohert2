import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './Navbar';
import Loader from './Loader';

// Lazy reloading
const Dashboard = React.lazy(() => import('./Dashboard'));
const Landing = React.lazy(() => import('./Landing'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/' element={<Landing />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Suspense>
  )
}

export default App
