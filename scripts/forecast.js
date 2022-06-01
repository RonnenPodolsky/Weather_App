const key = 'Iymjo5O9rau5FU0M661RBnYj8nzHXbaR';

const getWeather = async (location_id) => {
    const base = 'https://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${location_id}?apikey=${key}`;
    
    const response = await fetch(base+query);
    const data = await response.json()

    return data[0];
}

const getCity = async (city) => {
    const base = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;
    
    const response = await fetch(base+query);
    const data = await response.json()

    return data[0];
}