// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Text } from '@fluentui/react';

const Header = () => {
  return (
    <header style={{ background: '#0078d4', padding: '20px' }}>
      <Stack horizontal horizontalAlign="space-between">
        <Text variant="large" styles={{ root: { color:'white', fontSize: '36px' } }}>CareSync</Text>
        <nav>
          <ul style={{ display: 'flex', listStyleType: 'none', gap: '30px' }}>
            <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
            <li><Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link></li>
            <li><Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>Register</Link></li>
            <li><Link to="/profile" style={{ color: 'white', textDecoration: 'none' }}>Profile</Link></li>
            <li><Link to="/appointment" style={{ color: 'white', textDecoration: 'none' }}>Appointment</Link></li>
            <li><Link to="/clinic-records" style={{ color: 'white', textDecoration: 'none' }}>Clinic Records</Link></li>
          </ul>
        </nav>
      </Stack>
    </header>
  );
}

export default Header;
