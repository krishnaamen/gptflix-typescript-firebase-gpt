
# Live webapp :- https://gptlix.netlify.app/ 

## React Movie App with GPT Integration
# Project Overview
This project is a feature-rich movie app developed using React and various modern web technologies. The app includes user authentication, movie browsing, and a powerful GPT-powered search feature. Below are the detailed steps and features implemented throughout the development of this app.

Key Features and Steps Implemented
# Project Initialization:

Created the React app using Vite for fast builds and optimal development experience.
# Styling and UI Frameworks:

Configured Tailwind CSS for rapid and efficient styling.
# Core Components:

Built a responsive Header component.
# Routing and state management:
Implemented app routing for smooth navigation between pages.
# React redux is used for state management


# Authentication:

Developed a Login Form and a Sign-Up Form.
Set up Firebase for authentication, including creating and signing in user accounts.
Integrated Form validation and used the useRef hook for form handling.
Particle Effects:

Integrated particle.js for visually appealing background effects.
# Firebase Integration:

Configured Firebase to handle user authentication.
Implemented API to sign in users and created a Redux store with userSlice for state management.
Implemented sign-out functionality and unsubscribed from onAuthStateChanged Firebase callback.
# User Experience Enhancements:

Updated user profile with display name and profile picture.
Redirected users to the login page if not logged in when trying to access restricted routes (e.g., /browse).
Enhanced sign-up functionality to include display name and profile picture updates.
# Data Management:

Registered for TMDB API, created an app, and obtained an access token.
Fetched data from TMDB's "Now Playing" movies API and created a movieSlice for state management.
Built a custom hook for fetching "Now Playing" movies and updated the store with the fetched data.
# App Layout and Design:

Planned and developed the main and secondary container layouts.
Embedded YouTube videos with autoplay and mute configuration.
Styled components and pages using Tailwind CSS.
# Movie Features:

Built reusable components such as Movie List and Movie Card.
Utilized TMDB Image CDN for high-quality images.
Created a usePopularMovies custom hook for fetching popular movies.
# GPT Integration:

Implemented a GPT-powered search page using OpenAI's GPT-3 Turbo API.
Integrated a search bar for user input and fetched movie suggestions from TMDB based on GPT responses.
Created gptSlice and added GPT data to the Redux store.
Reused the Movie List component to display GPT movie suggestions.
Optimized API calls with memoization to reduce redundant requests.
# Environment Management:

Added an .env file for managing environment variables and ensured it was included in .gitignore for security.
Configured environmental variables in the Netlify hosting platform to protect sensitive data.
Deployment:

Deployed the app to production for public access.
Responsive Design:

Ensured the site is fully responsive across various device sizes for optimal user experience.
# Technologies and Tools Used
React
Vite
Tailwind CSS
Firebase
Redux (with userSlice and movieSlice)
TMDB API
OpenAI GPT-3 Turbo
Netlify
















# Development Steps
- Create React App using vite
- Configured                              #TailwindCSS
- Header Component
- Routing of App
- Login Form
- Sign Up Form
- Integration of                        # particle.js
- Form Validation
- useRef Hook for Form Handling
- Firebase Setup for Authentication      #Firebase
- Deploying the App to Production
- Create Sign-Up User Account with Firebase
- Implement Sign In User API
- Created Redux Store with userSlice    # Redux Store for state management
- Implemented Sign Out Functionality
- Update User Profile (Display Name and Profile Picture)
- Fixed Sign-Up User Display Name and Profile Picture Update
- Redirect to Login Page if the user is not logged in and tries to access /browse, and vice-versa
- Unsubscribed from the onAuthStateChanged Firebase Callback
- Added Hardcoded Values to the Constants File
- Registered TMDB API, Created an App, and Obtained Access Token      #TMDB API
- Fetched Data from TMDB 'Now Playing' Movies List API
- Custom Hook for Now Playing Movies
- Created movieSlice for Redux State Management
- Updated Store with Movies Data
- Planned Main Container and Secondary Container Layouts
- Fetched Data for Trailer Video
- Updated Store with Trailer Video Data
- Embedded YouTube Video and Configured Autoplay and Mute
- Styled Main Container with Tailwind CSS
- Built Secondary Component
- Built Movie List
- Built Movie Card
- Utilized TMDB Image CDN URL
- Styled Browse Page with Tailwind CSS
- Created usePopularMovies Custom Hook
- Implemented GPT Search Page
- Added GPT Search Bar
- Implemented Multi-Language Feature in the App
- Obtained OpenAI API Key
- Memoisation for not making frequent api calls
- Integrated GPT Search API Call                     # Integrating GPT3 Turbo api in app for suggestions.
- Fetched GPT Movie Suggestions from TMDB
- Created gptSlice and Added GPT Data to Store
- Reused Movie List Component to Create Movie Suggestion Container
- Optimized with Memoization
- Added .env File for Environment Variables          # Env files for protecting sensitive data
- Added .env File to .gitignore
- Added environmental variables in Netlify hosting plateform
- Made the Site Responsive
