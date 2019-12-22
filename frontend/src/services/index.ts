interface City {
    cityName :string
}

const url = "http://13.234.94.133:8080";
// const url = "http://localhost:8080";

export const getCityList = async () => {
    try {
        let response = await fetch(`${url}/city`);
        let data = await response.json()
        return data;
    } catch (error) {
        throw error;
    }
}

export const getWeatherDetailsForCity = async (cityName:string) => {
    try {
        debugger
        let response = await fetch(`${url}/weater/${cityName}`);
        let data = await response.json()
        return data;
    } catch (error) {
        throw error;
    }
}

export const getWeatherDetailsForCitys = async (citys: City) => {
    try {
        let response = await fetch(`${url}/weater/`, {
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

