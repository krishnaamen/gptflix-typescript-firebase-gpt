# Development Steps
- Create React App using vite
- Configured TailwindCSS
- Header Component
- Routing of App
- Login Form
- Sign Up Form
- Form Validation
- useRef Hook for Form Handling
# Firebase Setup for Authentication
- Deploying the App to Production
- Create Sign-Up User Account with Firebase
- Implement Sign In User API
# Created Redux Store with userSlice
- Implemented Sign Out Functionality
- Update User Profile (Display Name and Profile Picture)
- Fixed Sign-Up User Display Name and Profile Picture Update
- Redirect to Login Page if the user is not logged in and tries to access /browse, and vice-versa
- Unsubscribed from the onAuthStateChanged Firebase Callback
- Added Hardcoded Values to the Constants File
- Registered TMDB API, Created an App, and Obtained Access Token
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
# Implemented Multi-Language Feature in the App
- Obtained OpenAI API Key
# Integrated GPT Search API Call
- Fetched GPT Movie Suggestions from TMDB
- Created gptSlice and Added GPT Data to Store
- Reused Movie List Component to Create Movie Suggestion Container
- Optimized with Memoization
- Added .env File for Environment Variables
- Added .env File to .gitignore
# Made the Site Responsive