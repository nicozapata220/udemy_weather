import axios from 'axios';

const WEATHER_API_KEY='5948c0ba685126fb3db9525720d7bd6a';
const ROOT_URL='http://api.openweathermap.org/data/2.5/forecast?appid=' + WEATHER_API_KEY;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city){
    const url = ROOT_URL + '&q=' + city + ',us';
    //ajax request con axios
    
    const request = axios.get(url);

    return{
        type: FETCH_WEATHER,
        payload: request
    }
 };
