// components/Home.js
import React, { useEffect, useState } from 'react';
import { Stack, Text } from '@fluentui/react';
import './Home.css'; // Import the CSS file for animations

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set isVisible to true after the component mounts
    setIsVisible(true);
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh'}} className={`home-container ${isVisible ? 'fade-in' : ''}`}>
      <Stack tokens={{ childrenGap: 20 }}>
        <Text style={{color:'#0f6cbd'}} variant="xxLarge">Welcome to CareSync!</Text>
        <Text style={{textAlign:'center'}}>This is the homepage content.</Text>
      </Stack>
    </div>
  );
}

export default Home;
