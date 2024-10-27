import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './Navbar';

// Lazy Loading
const Dashboard = React.lazy(() => import("./Dashboard"));
const Landing = React.lazy(() => import("./Landing"));
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/dashboard' element={<Suspense fallback={"Loading..."}><Dashboard /></Suspense>} />
          <Route path='/' element={<Suspense fallback={"Loading..."}><Landing /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </div >
  )
}

export default App
