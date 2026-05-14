import axios from "axios";
import type { OWM_CurrentWeather } from "./OWMAPI.types";

const API_KEY = import.meta.env.VITE_OWM_APIKEY;

const BASE_URL = "https://api.openweathermap.org/data/2.5";

const FAKE_SLOW_API = true;
const FAKE_SLOW_API_DELAY = 2000;



export const getCurrentWeather = async (city: string) => {
  // Query API for current weather conditions in city

  const res = await axios.get<OWM_CurrentWeather>(
    BASE_URL + "/weather",
    {
      params: {
        q: city,
        units: "metric",
        appid: API_KEY,
      },
    }
  );

  // Fake slow API

  if (FAKE_SLOW_API) {
    await new Promise((r) =>
      setTimeout(r, FAKE_SLOW_API_DELAY)
    );
  }

  // return current weather conditions

  return res.data;
};