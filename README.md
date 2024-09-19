React Signup Form with Validation
A modern and responsive signup form built using React, Formik, and Yup for form handling and validation, and React Toastify for user notifications. The form features a sleek, user-friendly design inspired by contemporary UI aesthetics.

This is the Hosted link - https://form-validation-x5u3.vercel.app/

Table of Contents
Features
Preview
Getting Started
Installation
Usage
Dependencies
Project Structure
Contributing
License
Features
User-friendly Form: A responsive signup form with fields for name, email, password, and password confirmation.
Validation: Built-in validation for all fields using Yup and Formik.
Email: Validates against a specific regex pattern.
Password: Requires a combination of upper and lower case letters, digits, and special characters.
Confirm Password: Ensures the confirmation matches the entered password.
Responsive Design: Form is styled using CSS to ensure a beautiful, modern look on any screen size.
Notifications: Success notifications displayed using React Toastify.
Smooth UX: Button states, error messages, and field highlights for an enhanced user experience.
Preview

Getting Started
Prerequisites
Node.js and npm installed on your machine. You can download them from here.
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/Viswabhi/FormValidation.git
Navigate to the project directory:

bash
Copy code
cd react-signup-form
Install the dependencies:

bash
Copy code
npm install
Usage
Start the development server:

bash
Copy code
npm start
This will start the React application on localhost:3000.

Build for production:

bash
Copy code
npm run build
This will generate a production-ready build in the build folder.

Project Structure
graphql
Copy code
.
├── public                  # Static files
├── src                     # Source files
│   ├── components          # React components
│   │   └── SignupForm.js   # Signup form component
│   ├── App.js              # Main app file
│   ├── index.js            # Entry point for React
│   ├── SignupForm.css      # CSS file for SignupForm component
│   └── ...
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
Dependencies
React: A JavaScript library for building user interfaces.
Formik: A form management library for React.
Yup: A JavaScript schema builder for value parsing and validation.

React Toastify: A notification library for React.
Contributing
Contributions are welcome! If you'd like to contribute, please follow these steps:

Fork the repository.
Create a new branch (feature/your-feature).
Make your changes.
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature/your-feature).
![Uploading image.png…]()

Open a pull request.
License
This project is licensed under the MIT License - see the LICENSE file for details.
