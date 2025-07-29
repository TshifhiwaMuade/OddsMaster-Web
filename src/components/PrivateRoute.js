// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom'; // Replace Redirect with Navigate
import { useAuth } from '../contexts/AuthContext';

// Simple inline loading spinner (since LoadingSpinner doesn't exist)
const LoadingSpinner = () => (
  <div style={{ textAlign: 'center', padding: '20px', fontSize: '18px' }}>
    Loading...
  </div>
);

// PrivateRoute now accepts `element`, not `component` (v6 pattern)
export default function PrivateRoute({ element }) {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/sign-in"
        replace
        state={{
          from: window.location.pathname,
          message: 'Please sign in to access this page',
        }}
      />
    );
  }

  return element;
}