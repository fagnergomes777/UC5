# Hotel Reservation System

This project is a simple CRUD application for managing hotel reservations. It allows users to create, read, update, and delete reservations.

## Project Structure

```
ATIVIDADE
├── src
│   ├── config
│   │   └── database.js          # Database configuration
│   ├── modules
│   │   └── reserva
│   │       ├── controllers
│   │       │   └── reserva.controller.js  # Controller for reservation operations
│   │       ├── models
│   │       │   └── reserva.model.js       # Reservation model schema
│   │       └── routes
│   │           └── reserva.route.js       # Routes for reservation operations
│   └── index.js                     # Entry point of the application
├── .env                             # Environment variables
├── .env.example                     # Example of environment variables
├── package.json                     # NPM configuration file
├── package-lock.json                # Locked versions of dependencies
├── README.md                        # Project documentation
└── .gitignore                       # Files to ignore in Git
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd ATIVIDADE
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file based on the `.env.example` file and configure your database connection.

5. Start the application:
   ```
   npm start
   ```

## Usage

- **Create a Reservation**: Send a POST request to `/reservas` with reservation details.
- **Get All Reservations**: Send a GET request to `/reservas`.
- **Get a Reservation by ID**: Send a GET request to `/reservas/:id`.
- **Update a Reservation**: Send a PUT request to `/reservas/:id` with updated details.
- **Delete a Reservation**: Send a DELETE request to `/reservas/:id`.

## License

This project is licensed under the MIT License.