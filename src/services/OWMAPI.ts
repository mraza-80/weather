import axios from "axios"

const BASE_URL="https://api.openweathermap.org/data/2.5";
const FAKE_SLOW_API=true
const FAKE_SLOW_API_DELAY=2000;


export const getCurrentWeather=async(city:string)
{
    if(FAKE_SLOW_API)
    {
        await new Promise((r)=>setTimeout(r,FAKE_SLOW_API_DELAY));
    }
}