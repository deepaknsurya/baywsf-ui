import axios from 'axios';

// Set up default configuration for Axios
const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api', // Replace with your API base URL
    timeout: 10000, // Set a timeout for requests
    headers: {
        'Content-Type': 'application/json',
    },
});

// Utility function for GET requests
export const get = async (url, params = {}, headers = {}) => {
    try {
        const response = await axiosInstance.get(url, { params, headers });
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

// Utility function for POST requests
export const post = async (url, data = {}, headers = {}) => {
    try {
        const response = await axiosInstance.post(url, data, { headers });
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

// Error handling function
const handleError = (error) => {
    // Customize your error handling logic
    if (error.response) {
        console.error('Error response:', error.response.data);
        throw new Error(error.response.data.message || 'An error occurred');
    } else if (error.request) {
        console.error('Error request:', error.request);
        throw new Error('No response received from server');
    } else {
        console.error('Error message:', error.message);
        throw new Error('Error occurred while setting up request');
    }
};