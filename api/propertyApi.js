const BASE_URL = "http://localhost:5095/api/"; // Replace with your actual endpoint

export const getProperties = async () => {
    const endpoint = "properties";
    const response = await fetch(BASE_URL + endpoint);
    if (!response.ok) throw new Error("Failed to fetch properties");
    return response.json();
};
export const ApiBaseUrl = BASE_URL; // Replace with your actual endpoint