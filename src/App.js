import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

// Page Components
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import Pricing from './components/pages/Pricing';
import Dashboard from './components/pages/Dashboard';
import PageNotFound from './components/pages/PageNotFound';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Switch>
          {/* Public Routes */}
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/pricing" exact component={Pricing} />

          {/* Protected Routes */}
          <PrivateRoute path="/dashboard" component={Dashboard} />

          {/* 404 Page - Keep this last */}
          <Route component={PageNotFound} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;