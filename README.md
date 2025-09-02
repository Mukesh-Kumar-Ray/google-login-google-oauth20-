# Google Login Example

A simple Node.js application demonstrating Google OAuth 2.0 authentication using Express and Passport.js.

## Features

- Login with Google account
- User session management
- Displays user profile info after login

## Prerequisites

- Node.js (v18+ recommended)
- Google Cloud OAuth credentials
  
## NPM Packages Used

This project uses the following npm packages:

- [`express`](https://www.npmjs.com/package/express): Web framework for Node.js
- [`express-session`](https://www.npmjs.com/package/express-session): Session middleware for Express
- [`passport`](https://www.npmjs.com/package/passport): Authentication middleware
- [`passport-google-oauth20`](https://www.npmjs.com/package/passport-google-oauth20): Google OAuth 2.0 strategy for Passport
- [`dotenv`](https://www.npmjs.com/package/dotenv): Loads environment variables from `.env` file
- [`mongoose`](https://www.npmjs.com/package/mongoose): MongoDB object modeling (optional, not used in current code)
- [`nodemon`](https://www.npmjs.com/package/nodemon): Utility for automatically restarting the server during development

Install all dependencies with:

```sh
npm install express express-session passport passport-google-oauth20 dotenv mongoose nodemon
```

## Setup

1. **Clone the repository**

   ```sh
   git clone https://github.com/yourusername/google-login.git
   cd google-login
   ```

2. **Install dependencies**

   ```sh
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the root directory:

   ```properties
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   CALLBACK_URL=http://localhost:3000/auth/google/callback
   ```

   Replace the values with your credentials from [Google Cloud Console](https://console.cloud.google.com/apis/credentials).

4. **Run the application**

   ```sh
   npm run dev
   ```

   The server will start at [http://localhost:3000](http://localhost:3000).

## Usage

- Visit [http://localhost:3000](http://localhost:3000)
- Click "Login with Google"
- Authorize the app and view your profile

## Project Structure

```
.
├── .env
├── .gitignore
├── index.js
├── package.json
└── auth/
    └── google.js
```

- [`index.js`](index.js): Main Express server
- [`auth/google.js`](auth/google.js): Google OAuth strategy setup
