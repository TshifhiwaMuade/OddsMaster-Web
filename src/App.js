// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Switch → Routes
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

// Lazy load page components for better performance
const Home = React.lazy(() => import('./components/pages/Home'));
const Services = React.lazy(() => import('./components/pages/Services'));
const Products = React.lazy(() => import('./components/pages/Products'));
const SignUp = React.lazy(() => import('./components/pages/SignUp'));
const SignIn = React.lazy(() => import('./components/pages/SignIn'));
const Pricing = React.lazy(() => import('./components/pages/Pricing'));
const Dashboard = React.lazy(() => import('./components/pages/Dashboard'));
const PageNotFound = React.lazy(() => import('./components/pages/PageNotFound'));

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <React.Suspense fallback={<div className="page-loading">
  <div className="spinner"></div>
  <p>Loading, getting things ready...</p>
</div>}>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/pricing" element={<Pricing />} />

            {/* Private Routes */}
            <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />

            {/* 404 Page - Keep this last with no path */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </React.Suspense>
      </AuthProvider>
    </Router>
  );
}

export default App;