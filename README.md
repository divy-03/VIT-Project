# VitXchange - C2C Buy and Sell Website - Frotend

Welcome to the frontend repository for VitXchange C2C (Consumer-to-Consumer) Buy and Sell website. This project is built using a range of technologies to create a user-friendly and efficient platform for buying and selling items between consumers.

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

## Getting Started

To get started with the project, follow these steps:

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/your-repo.git
2. Change directory to the project folder:

   ```bash
   cd your-repo
3. Install project dependencies:

   ```bash
   npm install
