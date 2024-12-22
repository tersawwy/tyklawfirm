const config = {
    API_URL: process.env.NODE_ENV === 'production' 
        ? '/api'  // Production URL (relative path)
        : 'http://localhost:7077/api'  // Your current development URL
};

export default config;
