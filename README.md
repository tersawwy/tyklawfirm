# ⚖️ TYK Law Firm Case Management System

## Overview

The TYK Law Firm Case Management System is a full-stack web application designed to streamline the management of legal cases, clients, and appointments for law firms. It provides a robust platform for efficient case tracking, secure user authentication, and automated workflows.

**Key Features:**
* **Case Management:** Efficiently create, track, and manage legal cases, including client details, case status, and associated documents.
* **Client & Appointment Management:** Organize client information and schedule appointments directly within the system.
* **Secure Authentication:** Implements OTP (One-Time Password) based authentication using Nodemailer for email verification, and integrates OAuth V2 for enhanced security and convenience.
* **Automated Case Assignment:** Reduces manual effort by automating the assignment of cases, improving workflow efficiency.
* **Intuitive User Interface:** Developed with ReactJS to provide a responsive and user-friendly experience.
* **Robust Backend:** Built with ExpressJS to handle API requests, data processing, and interactions with the database.
* **Relational Database:** Utilizes MySQL for reliable storage and management of case-related data.

## Demo

Experience the live application here: [https://tykfirm.netlify.app](https://tykfirm.netlify.app)

## Technologies Used

* **Frontend:**
    * ReactJS
    * HTML5
    * CSS3
    * JavaScript
* **Backend:**
    * Node.js
    * ExpressJS
    * Nodemailer (for OTP)
    * OAuth V2
* **Database:**
    * MySQL

## Setup Instructions

### Prerequisites

* Node.js and npm (or yarn) installed
* MySQL server installed and running

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/tersawwy/tyklawfirm.git](https://github.com/tersawwy/tyklawfirm.git)
    cd tyklawfirm
    ```

2.  **Backend Setup:**
    Navigate to the `backend` directory, install dependencies, and set up your environment variables.

    ```bash
    cd backend
    npm install # or yarn install
    ```

    Create a `.env` file in the `backend` directory with your database and email credentials.

    Example `.env`:
    ```
    DB_HOST=localhost
    DB_USER=your_mysql_user
    DB_PASSWORD=your_mysql_password
    DB_DATABASE=tyklawfirm_db
    
    # For Nodemailer (e.g., using Gmail)
    EMAIL_USER=your_email@gmail.com
    EMAIL_PASS=your_email_app_password
    ```
    *Replace placeholders with your actual credentials.*

3.  **Database Setup:**
    Connect to your MySQL server and create the database and tables. You might have SQL scripts in the `backend` folder (e.g., `schema.sql` or `init.sql`) that define the database structure.

    ```sql
    CREATE DATABASE tyklawfirm_db;
    USE tyklawfirm_db;
    -- Run your table creation queries here or import a .sql file
    ```
    *If no `schema.sql` is provided in the repository, you will need to manually define your tables based on the backend's data models.*

4.  **Frontend Setup:**
    Navigate to the `frontend` directory and install dependencies.

    ```bash
    cd ../frontend
    npm install # or yarn install
    ```

    You might need to create a `.env` file in the `frontend` directory if your React app needs to know the backend API URL.

    Example `.env` (in `frontend` directory):
    ```
    REACT_APP_API_URL=http://localhost:5000/api # Or wherever your backend runs
    ```

### Running the Application

1.  **Start the Backend Server:**
    From the `backend` directory:
    ```bash
    npm start # or node server.js
    ```
    The backend server will typically run on `http://localhost:5000` (or the port defined in your backend code).

2.  **Start the Frontend Development Server:**
    From the `frontend` directory:
    ```bash
    npm start
    ```
    This will usually open the application in your web browser at `http://localhost:3000`.

## Contributing

Contributions are highly appreciated! If you have suggestions for improvements, bug fixes, or new features, please:
1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/YourFeature`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some feature'`).
5.  Push to the branch (`git push origin feature/YourFeature`).
6.  Open a Pull Request.

## License

This project is open-source and available under the [MIT License](LICENSE).
