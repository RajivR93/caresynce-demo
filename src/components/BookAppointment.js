import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { mergeStyleSets, Text, TextField, PrimaryButton, Dialog, DialogType, DialogFooter } from '@fluentui/react';
import { Formik, Form, Field } from 'formik';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

const classNames = mergeStyleSets({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: '20px',
    textAlign: 'center',
  },
  form: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textField: {
    margin: '10px 0',
    width: '300px',
  },
  label: {
    display: 'inline-block',
    width: '100px',
    textAlign: 'right',
    marginRight: '10px',
  },
  inputContainer: {
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    marginTop: '20px',
    width: '200px',
  },
  mapContainer: {
    height: '600px',
    width: '80%',
    marginTop: '20px',
  },
  successMessage: {
    marginTop: '10px',
    color: 'white', // Adjust color to match Fluent UI button color
    backgroundColor: '#0078D4', // Fluent UI primary button color
    padding: '10px',
    borderRadius: '5px',
  },
});

const BookAppointment = () => {
  const { cityName, address } = useParams();
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    // Simulate API call or logic for booking appointment
    console.log(values); // For demonstration purposes
    resetForm(); // Reset the form after submission
    setShowModal(true); // Show modal on successful submission
  };

  // Dummy coordinates for cities (you should replace these with real coordinates)
  const cityCoordinates = {
    Mumbai: [19.0760, 72.8777],
    Delhi: [28.7041, 77.1025],
    Bangalore: [12.9716, 77.5946],
    Hyderabad: [17.3850, 78.4867],
    Ahmedabad: [23.0225, 72.5714],
    Chennai: [13.0827, 80.2707],
    Kolkata: [22.5726, 88.3639],
    Surat: [21.1702, 72.8311],
    Pune: [18.5204, 73.8567],
    Jaipur: [26.9124, 75.7873],
    Lucknow: [26.8467, 80.9462],
    Kanpur: [26.4499, 80.3319],
    Nagpur: [21.1458, 79.0882],
    Indore: [22.7196, 75.8577],
    Thane: [19.2183, 72.9781],
    Bhopal: [23.2599, 77.4126],
    Visakhapatnam: [17.6868, 83.2185],
    Patna: [25.5941, 85.1376],
    Vadodara: [22.3072, 73.1812],
    Ghaziabad: [28.6692, 77.4538],
    Ludhiana: [30.9010, 75.8573],
    Agra: [27.1767, 78.0081],
    Nashik: [20.0112, 73.7909],
    Faridabad: [28.4089, 77.3178],
    Meerut: [28.9845, 77.7064],
    Rajkot: [22.3039, 70.8022],
    'Kalyan-Dombivli': [19.2352, 73.1300],
    'Vasai-Virar': [19.3924, 72.8328],
    Varanasi: [25.3176, 82.9739],
    Srinagar: [34.0836, 74.7973],
    Aurangabad: [19.8762, 75.3433],
    Dhanbad: [23.7957, 86.4304],
    Amritsar: [31.6340, 74.8723],
    'Navi Mumbai': [19.0330, 73.0297],
    Allahabad: [25.4358, 81.8463],
    Ranchi: [23.3441, 85.3096],
    Howrah: [22.5958, 88.2636],
    Coimbatore: [11.0168, 76.9558],
    Jabalpur: [23.1815, 79.9864],
    Gwalior: [26.2183, 78.1828],
    // Add coordinates for other cities as needed
  };

  const cityPosition = cityCoordinates[cityName] || [0, 0]; // Default to [0, 0] if coordinates not found

  const hideModal = () => {
    setShowModal(false);
  };

  return (
    <div className={classNames.container}>
      <Text variant="xxLarge">{cityName} - Book Appointment</Text>
      <Text variant="large" block>{address}</Text>

      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          preferredDate: '',
          preferredTime: '',
        }}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit }) => (
          <Form className={classNames.form} onSubmit={handleSubmit}>
            <div className={classNames.inputContainer}>
              <label className={classNames.label} htmlFor="name">Name:</label>
              <Field
                as={TextField}
                className={classNames.textField}
                id="name"
                name="name"
                required
              />
            </div>
            <div className={classNames.inputContainer}>
              <label className={classNames.label} htmlFor="email">Email:</label>
              <Field
                as={TextField}
                className={classNames.textField}
                id="email"
                name="email"
                type="email"
                required
              />
            </div>
            <div className={classNames.inputContainer}>
              <label className={classNames.label} htmlFor="phone">Phone:</label>
              <Field
                as={TextField}
                className={classNames.textField}
                id="phone"
                name="phone"
                type="tel"
                required
              />
            </div>
            <div className={classNames.inputContainer}>
              <label className={classNames.label} htmlFor="preferredDate">Preferred Date:</label>
              <Field
                as={TextField}
                className={classNames.textField}
                id="preferredDate"
                name="preferredDate"
                type="date"
                required
              />
            </div>
            <div className={classNames.inputContainer}>
              <label className={classNames.label} htmlFor="preferredTime">Preferred Time:</label>
              <Field
                as={TextField}
                className={classNames.textField}
                id="preferredTime"
                name="preferredTime"
                type="time"
                required
              />
            </div>
            <PrimaryButton className={classNames.button} type="submit">Book Appointment</PrimaryButton>
          </Form>
        )}
      </Formik>

      <Dialog
        hidden={!showModal}
        onDismiss={hideModal}
        dialogContentProps={{
          type: DialogType.normal,
          title: 'Appointment booked successfully',
        }}
        modalProps={{
          isBlocking: true,
          styles: { main: { maxWidth: 450 } },
        }}
      >
        <DialogFooter>
          <PrimaryButton onClick={hideModal} text="Close" />
        </DialogFooter>
      </Dialog>

      <div className={classNames.mapContainer}>
        <Text variant="large" block>Clinic Map Location</Text>
        <MapContainer center={cityPosition} zoom={12} style={{ height: '500px', width: '100%' }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={cityPosition}>
            <Popup>{cityName}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default BookAppointment;
