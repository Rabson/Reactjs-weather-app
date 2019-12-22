export const getCityList = async () => {
    try {
        let response = await fetch(`http://localhost:3001/city`);
        let data = await response.json()
        return data;
    } catch (error) {
        throw error;
    }
}
interface City {
    cityName :string
}
export const getWeatherDetailsForCity = async (cityName:string) => {
    try {
        debugger
        let response = await fetch(`http://localhost:3001/weater/${cityName}`);
        let data = await response.json()
        return data;
    } catch (error) {
        throw error;
    }
}

export const getWeatherDetailsForCitys = async (citys: City) => {
    try {
        let response = await fetch('http://localhost:3001/weater/', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify({ citys })
        });
        let data = await response.json()
        return data;
    } catch (error) {
        throw error;
    }
}

