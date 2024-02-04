# VitXchange - C2C Buy and Sell Website - Frontend

Welcome to the frontend repository for VitXchange C2C (Consumer-to-Consumer) Buy and Sell website. This project is built using a range of technologies to create a user-friendly and efficient platform for buying and selling items between consumers.

![VitXchange Logo](https://res.cloudinary.com/djgwv8dck/image/upload/v1697346595/products/WhatsApp_Image_2023-10-10_at_00.15.37_19b77690_yitpki.jpg)

## Technologies Used

- **React:** The core framework for building the user interface.
- **JSX:** A syntax extension for JavaScript for defining UI components.
- **CSS:** Cascading Style Sheets for styling and layout.
- **Redux Toolkit:** A powerful library for managing application state.
- **RTK Query:** Used for efficient data fetching and management of API data.
- **React Router DOM:** For handling client-side routing and navigation.
- **React Toastify:** To provide informative and user-friendly notifications.
- **Font Awesome:** For including icons and symbols in the UI.

## Project Structure

The project structure is organized to separate concerns and maintain a clean codebase. Here's a brief overview:

- **src/component:** Contains React components used in the application.
- **src/component/layout:** Contains basic layout component that every page requires, like Header, Navbar, Footer, Loader, etc.
- **src/Product/productApi.js:** Contains rtk-query functions which send request to Product Api's.
- **src/User/userApi.js:** Contains rtk-query functions which send request to User Api's.  
- **src/App.js:** Contains all the routes to different pages.

## References

The following technologies are used and have taken reference from their documentations:

1. [React-router-dom](https://reactrouter.com/en/main/start/tutorial)
2. [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)
3. [Rtk-Query](https://redux-toolkit.js.org/rtk-query/overview)
4. [React-toastify](https://www.npmjs.com/package/react-toastify)
5. [Fotawesome](https://fontawesome.com/)

## Getting Started
1. Clone this repository:

   ```bash
   git clone https://github.com/divy-03/VIT-Project.git
2. Change directory to the project folder:

   ```bash
   cd VIT-Project
3. Initialize react app

   ```bash
   npx create-react-app ./
   
4. Install project dependencies:

   ```bash
   npm install
5. Start the development server:

   ```bash
   npm start
This will start the development server, and you can access the website in your browser at http://localhost:3000
