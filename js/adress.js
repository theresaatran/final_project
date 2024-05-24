const fetchAndDisplayAddresses = async () => {
    const apiKey = 'YOUR_API_KEY'; // Replace 'YOUR_API_KEY' with your actual API key

    try {
        const response = await fetch(`https://api.addressy.com/Capture/Interactive/Find/v1.1/json3.ws?Key=${apiKey}&Text=New%20York`);
        const data = await response.json();
        console.log('Response from Addressy API:', data);
        // Process the response data as needed
    } catch (error) {
        console.error('Error fetching addresses:', error);
    }
};
