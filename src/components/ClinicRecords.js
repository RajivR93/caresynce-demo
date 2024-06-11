import React from 'react';
import { mergeStyleSets, Text } from '@fluentui/react';

const cities = [
  { name: 'Mumbai', clinics: 500 },
  { name: 'Delhi', clinics: 450 },
  { name: 'Bangalore', clinics: 400 },
  { name: 'Hyderabad', clinics: 350 },
  { name: 'Ahmedabad', clinics: 300 },
  { name: 'Chennai', clinics: 250 },
  { name: 'Kolkata', clinics: 200 },
  { name: 'Surat', clinics: 180 },
  { name: 'Pune', clinics: 170 },
  { name: 'Jaipur', clinics: 160 },
  { name: 'Lucknow', clinics: 150 },
  { name: 'Kanpur', clinics: 140 },
  { name: 'Nagpur', clinics: 130 },
  { name: 'Indore', clinics: 120 },
  { name: 'Thane', clinics: 110 },
  { name: 'Bhopal', clinics: 100 },
  { name: 'Visakhapatnam', clinics: 90 },
  { name: 'Patna', clinics: 85 },
  { name: 'Vadodara', clinics: 80 },
  { name: 'Ghaziabad', clinics: 75 },
  { name: 'Ludhiana', clinics: 70 },
  { name: 'Agra', clinics: 65 },
  { name: 'Nashik', clinics: 60 },
  { name: 'Faridabad', clinics: 55 },
  { name: 'Meerut', clinics: 50 },
  { name: 'Rajkot', clinics: 45 },
  { name: 'Kalyan-Dombivli', clinics: 40 },
  { name: 'Vasai-Virar', clinics: 38 },
  { name: 'Varanasi', clinics: 36 },
  { name: 'Srinagar', clinics: 34 },
  { name: 'Aurangabad', clinics: 32 },
  { name: 'Dhanbad', clinics: 30 },
  { name: 'Amritsar', clinics: 28 },
  { name: 'Navi Mumbai', clinics: 26 },
  { name: 'Allahabad', clinics: 24 },
  { name: 'Ranchi', clinics: 22 },
  { name: 'Howrah', clinics: 20 },
  { name: 'Coimbatore', clinics: 18 },
  { name: 'Jabalpur', clinics: 16 },
  { name: 'Gwalior', clinics: 14 },
  { name: 'Vijayawada', clinics: 12 },
  { name: 'Jodhpur', clinics: 10 },
  { name: 'Madurai', clinics: 8 },
  { name: 'Raipur', clinics: 6 },
  { name: 'Kota', clinics: 5 },
  { name: 'Guwahati', clinics: 4 },
  { name: 'Chandigarh', clinics: 3 },
  { name: 'Solapur', clinics: 2 },
  { name: 'Hubli-Dharwad', clinics: 1 },
  // ... Continue adding until you have 100 cities
];

const classNames = mergeStyleSets({
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(200px, 1fr))',
    gap: '25px',
    padding: '16px',
    listStyleType: 'none',
    paddingLeft: 0,
  },
  gridItem: {
    
    padding: '10px',
    textAlign: 'center',
  },
  cityName: {
    fontWeight: 'bold',
  },
  clinicInfo: {
    marginTop: '0px',
    backgroundColor: "0078d4",
    borderRadius: "4px"
  },
});

const ClinicRecords = () => {
  return (
    <div>
      <div style={{textAlign:'center', paddingTop:"10px"}}>
      <Text variant="xxLarge">List of Cities Available</Text> <br/>
      <Text>Explore local clinics to find convenient and accessible medical care.</Text>
      </div>
      <div style={{paddingLeft:"150px", paddingRight:"150px"}}>
      <ul className={classNames.gridContainer}>
        {cities.map((city, index) => (
          <li key={index} className={classNames.gridItem}>
            <p className={classNames.cityName}>{city.name}</p>
            <p style={{ backgroundColor: '#0078d4', color:'white'}} className={classNames.clinicInfo}>{city.clinics} clinics available</p>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default ClinicRecords;
