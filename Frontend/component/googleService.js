import axios from 'axios';

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

export async function fetchGoogleData() {
    try {
        const response = await axios.get(
            `https://api.example.com/data?key=${AIzaSyC0bgunBGcBvWtIJlWj8LbXnDe7fCg_O7s}` // Replace with your actual Google API endpoint
        );
        return response.data;
    } catch (error) {
        console.error('Error fetching data from Google API:', error);
        throw new Error('Error fetching data');
    }
}
