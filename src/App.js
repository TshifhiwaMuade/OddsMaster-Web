// src/App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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

// Create a route configuration object for better maintainability
const routes = [
  { path: '/', exact: true, component: Home, isPublic: true },
  { path: '/services', component: Services, isPublic: true },
  { path: '/products', component: Products, isPublic: true },
  { path: '/sign-up', component: SignUp, isPublic: true },
  { path: '/sign-in', component: SignIn, isPublic: true },
  { path: '/pricing', exact: true, component: Pricing, isPublic: true },
  { path: '/dashboard', component: Dashboard, isPublic: false },
];

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <React.Suspense fallback={<div className="page-loading">Loading...</div>}>
          <Switch>
            {routes.map((route) =>
              route.isPublic ? (
                <Route
                  key={route.path}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              ) : (
                <PrivateRoute
                  key={route.path}
                  path={route.path}
                  component={route.component}
                />
              )
            )}
            {/* 404 Page - Keep this last */}
            <Route component={PageNotFound} />
          </Switch>
        </React.Suspense>
      </AuthProvider>
    </Router>
  );
}

export default App;