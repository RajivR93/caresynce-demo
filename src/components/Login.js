// components/Login.js
import React from 'react';
import { Stack, TextField, PrimaryButton, Text } from '@fluentui/react';
import { Formik, Form, Field } from 'formik';

const initialValues = {
  email: '',
  password: ''
};

const Login = () => {
  const handleSubmit = (values, actions) => {
    // Handle form submission here
    console.log(values);
    actions.setSubmitting(false);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', marginTop:'60px' }}>
      <Text variant="xLarge">Login</Text>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Stack tokens={{ childrenGap: 10 }}>
              <Field name="email">
                {({ field }) => (
                  <TextField
                    {...field}
                    label="Email"
                    type="email"
                    required
                    styles={{ root: { maxWidth: '100%' } }} // Adjust styles as needed
                  />
                )}
              </Field>
              <Field name="password">
                {({ field }) => (
                  <TextField
                    {...field}
                    label="Password"
                    type="password"
                    required
                    styles={{ root: { maxWidth: '100%' } }} // Adjust styles as needed
                  />
                )}
              </Field>
              <div > 
              <PrimaryButton type="submit" text="Login" disabled={isSubmitting} styles={{ root: { width: '60px',} }} /> {/* Adjust styles as needed */}
              </div>
            </Stack>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
