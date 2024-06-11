// components/Footer.js
import React from 'react';
import { Stack, Text } from '@fluentui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <Stack
      horizontalAlign="center"
      verticalAlign="center"
      tokens={{ padding: '16px', childrenGap: '5px' }}
      styles={{
        root: {
          background: '#0f6cbd',
          color: '#fff',
          padding: '10px 0',
          position: 'fixed', // Fixed position
          bottom: 0, // Align to bottom of the viewport
          width: '100%' // Full width
        }
      }}
    >
      <Text variant="mediumPlus" styles={{ root: { color: '#fff' } }}>© 2024 CareSync. All rights reserved.</Text>
      <Stack horizontal tokens={{ childrenGap: 20 }}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookF} style={{ color: '#3b5998' }} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} style={{ color: '#00acee' }} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} style={{ color: '#0077b5' }} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} style={{ color: '#c32aa3' }} />
        </a>
      </Stack>
      <Text variant="small" styles={{ root: { color: '#fff' } }}>123 Healthcare Drive, Wellness City, HW 45678</Text>
      <Text variant="small" styles={{ root: { color: '#fff' } }}>Contact us: info@caresync.com</Text>
    </Stack>
  );
}

export default Footer;
