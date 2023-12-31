import React from 'react';
import styles from './Header.module.css';

interface HeaderProps {
  title: string;
  onDarkModeToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onDarkModeToggle }) => {
  return (
    <div className="navbar box-shadow bg-white shadow-sm">
      <div className="container d-flex justify-content-between">
        <a href="#" className="navbar-brand d-flex align-items-center px-4">
          <strong>{title}</strong>
        </a>
      </div>
    </div>
  );
};

export default Header;
