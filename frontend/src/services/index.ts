export const getCityList = async () => {
    try {
        let response = await fetch(`http://localhost:3001/city`);
        let data = await response.json()
        return data;
    } catch (error) {
        throw error;
    }
}

export const getWeatherDetailsForCity = async () => {
    try {
        let response = await fetch(`http://localhost:3001/city`);
        let data = await response.json()
        return data;
    } catch (error) {
        throw error;
    }
}

