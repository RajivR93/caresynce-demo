import React from 'react';
import { mergeStyleSets, Text } from '@fluentui/react';
import { Link } from 'react-router-dom';

const cities = [
  { name: 'Mumbai', address: 'Mumbai, Maharashtra, India', clinics: 500 },
  { name: 'Delhi', address: 'Delhi, India', clinics: 450 },
  { name: 'Bangalore', address: 'Bangalore, Karnataka, India', clinics: 400 },
  { name: 'Hyderabad', address: 'Hyderabad, Telangana, India', clinics: 350 },
  { name: 'Ahmedabad', address: 'Ahmedabad, Gujarat, India', clinics: 300 },
  { name: 'Chennai', address: 'Chennai, Tamil Nadu, India', clinics: 250 },
  { name: 'Kolkata', address: 'Kolkata, West Bengal, India', clinics: 200 },
  { name: 'Surat', address: 'Surat, Gujarat, India', clinics: 180 },
  { name: 'Pune', address: 'Pune, Maharashtra, India', clinics: 170 },
  { name: 'Jaipur', address: 'Jaipur, Rajasthan, India', clinics: 160 },
  { name: 'Lucknow', address: 'Lucknow, Uttar Pradesh, India', clinics: 150 },
  { name: 'Kanpur', address: 'Kanpur, Uttar Pradesh, India', clinics: 140 },
  { name: 'Nagpur', address: 'Nagpur, Maharashtra, India', clinics: 130 },
  { name: 'Indore', address: 'Indore, Madhya Pradesh, India', clinics: 120 },
  { name: 'Thane', address: 'Thane, Maharashtra, India', clinics: 110 },
  { name: 'Bhopal', address: 'Bhopal, Madhya Pradesh, India', clinics: 100 },
  { name: 'Visakhapatnam', address: 'Visakhapatnam, Andhra Pradesh, India', clinics: 90 },
  { name: 'Patna', address: 'Patna, Bihar, India', clinics: 85 },
  { name: 'Vadodara', address: 'Vadodara, Gujarat, India', clinics: 80 },
  { name: 'Ghaziabad', address: 'Ghaziabad, Uttar Pradesh, India', clinics: 75 },
  { name: 'Ludhiana', address: 'Ludhiana, Punjab, India', clinics: 70 },
  { name: 'Agra', address: 'Agra, Uttar Pradesh, India', clinics: 65 },
  { name: 'Nashik', address: 'Nashik, Maharashtra, India', clinics: 60 },
  { name: 'Faridabad', address: 'Faridabad, Haryana, India', clinics: 55 },
  { name: 'Meerut', address: 'Meerut, Uttar Pradesh, India', clinics: 50 },
  { name: 'Rajkot', address: 'Rajkot, Gujarat, India', clinics: 45 },
  { name: 'Kalyan-Dombivli', address: 'Kalyan-Dombivli, Maharashtra, India', clinics: 40 },
  { name: 'Vasai-Virar', address: 'Vasai-Virar, Maharashtra, India', clinics: 38 },
  { name: 'Varanasi', address: 'Varanasi, Uttar Pradesh, India', clinics: 36 },
  { name: 'Srinagar', address: 'Srinagar, Jammu and Kashmir, India', clinics: 34 },
  { name: 'Aurangabad', address: 'Aurangabad, Maharashtra, India', clinics: 32 },
  { name: 'Dhanbad', address: 'Dhanbad, Jharkhand, India', clinics: 30 },
  { name: 'Amritsar', address: 'Amritsar, Punjab, India', clinics: 28 },
  { name: 'Navi Mumbai', address: 'Navi Mumbai, Maharashtra, India', clinics: 26 },
  { name: 'Allahabad', address: 'Allahabad, Uttar Pradesh, India', clinics: 24 },
  { name: 'Ranchi', address: 'Ranchi, Jharkhand, India', clinics: 22 },
  { name: 'Howrah', address: 'Howrah, West Bengal, India', clinics: 20 },
  { name: 'Coimbatore', address: 'Coimbatore, Tamil Nadu, India', clinics: 18 },
  { name: 'Jabalpur', address: 'Jabalpur, Madhya Pradesh, India', clinics: 16 },
  { name: 'Gwalior', address: 'Gwalior, Madhya Pradesh, India', clinics: 14 },
  { name: 'Vijayawada', address: 'Vijayawada, Andhra Pradesh, India', clinics: 12 },
  { name: 'Jodhpur', address: 'Jodhpur, Rajasthan, India', clinics: 10 },
  { name: 'Madurai', address: 'Madurai, Tamil Nadu, India', clinics: 8 },
  { name: 'Raipur', address: 'Raipur, Chhattisgarh, India', clinics: 6 },
  { name: 'Kota', address: 'Kota, Rajasthan, India', clinics: 5 },
  { name: 'Guwahati', address: 'Guwahati, Assam, India', clinics: 4 },
  { name: 'Chandigarh', address: 'Chandigarh, India', clinics: 3 },
  { name: 'Solapur', address: 'Solapur, Maharashtra, India', clinics: 2 },
  { name: 'Hubli-Dharwad', address: 'Hubli-Dharwad, Karnataka, India', clinics: 1 },
];

const classNames = mergeStyleSets({
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '25px',
    padding: '16px',
    listStyleType: 'none',
    paddingLeft: 0,
  },
  gridItem: {
    padding: '10px',
    textAlign: 'center',
    cursor: 'pointer',
    border: '1px solid #ccc',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#f0f0f0',
    },
  },
  cityName: {
    fontWeight: 'bold',
  },
  clinicInfo: {
    marginTop: '0px',
    backgroundColor: '#0078d4',
    borderRadius: '4px',
    color: 'white',
    padding: '5px',
  },
  header: {
    textAlign: 'center',
    paddingTop: '10px',
  },
  container: {
    paddingLeft: '150px',
    paddingRight: '150px',
  },
});

const ClinicRecords = () => {
  return (
    <div>
      <div className={classNames.header}>
        <Text variant="xxLarge">List of Cities Available</Text> <br/>
        <Text>Explore local clinics to find convenient and accessible medical care.</Text>
      </div>
      <div className={classNames.container}>
        <ul className={classNames.gridContainer}>
          {cities.map((city, index) => (
            <li key={index} className={classNames.gridItem}>
              <Link to={`/book/${city.name}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <p className={classNames.cityName}>{city.name}</p>
                <p className={classNames.clinicInfo}>{city.clinics} clinics available</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ClinicRecords;
