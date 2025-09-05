// components/NavLinks.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = () => {
  const links = [
    'Dashboard',
    'Predictions',
    'League Tables',
    'Statistics',
    'Account',
    'Settings',
  ];

  return (
    <nav>
      <ul className="flex space-x-6 font-medium text-sm">
        {links.map((link) => (
          <li key={link}>
            <Link
              to={`/${link.toLowerCase().replace(' ', '-')}`}
              className="hover:text-green-400 transition-colors duration-200"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;