import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SignUpform.css'; // Import the CSS file


const SignUpform = () => {
  // Initial values for the form fields
  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  // Regex for email validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Regex for password validation
  const passwordRegex = /^(?=.[A-Z])(?=.[a-z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,16}$/;

  // Validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .matches(emailRegex, 'Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .matches(passwordRegex, 'Password must be 8-16 characters and include at least one uppercase letter, one lowercase letter, one number, and one special character')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required'),
  });

  // Handle form submission
  const onSubmit = (values, { setSubmitting, resetForm }) => {
    // Display a toast message using react-toastify
    toast.success(`Well done ${values.name}! Your registration is complete. 😎`);

    // Clear all form fields
    resetForm();

    // Allow the submit button to be re-enabled after some delay
    setSubmitting(false);
  };

  return (
    <div className="form-wrapper">
      <div className="form-background">
        <div className="form-container">
          <h2>Sign Up</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting, isValid }) => (
              <Form>
                <div className="input-container">
                  <label htmlFor="name">Name</label>
                  <Field type="text" id="name" name="name" placeholder="Name" />
                  <ErrorMessage name="name" component="div" className="error" />
                </div>

                <div className="input-container">
                  <label htmlFor="email">Email</label>
                  <Field type="email" id="email" name="email" placeholder="Email" />
                  <ErrorMessage name="email" component="div" className="error" />
                </div>

                <div className="input-container">
                  <label htmlFor="password">Password</label>
                  <Field type="password" id="password" name="password" placeholder="Password" />
                  <ErrorMessage name="password" component="div" className="error" />
                </div>

                <div className="input-container">
                  <label htmlFor="confirmPassword">ConfirmPassword</label>
                  <Field type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" />
                  <ErrorMessage name="confirmPassword" component="div" className="error" />
                </div>

                <button type="submit" disabled={!isValid || isSubmitting}>
                  Register
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      {/* Toastify container to display toasts */}
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick />
    </div>
  );
};

export default SignUpform;