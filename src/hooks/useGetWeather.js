import React, { useState, useEffect } from "react";
import * as Location from "expo-location";

const WEATHER_API_KEY = "4345816f43ea5e760a56fa2ecf1c1aff";

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true);
  const [errMsg, setErrMsg] = useState(null);
  const [weather, setWeather] = useState([]);
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      );
      const data = await res.json();
      setWeather(data);
      setLoading(false);
    } catch (error) {
      setErrMsg("Could not fetch weather");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrMsg("permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLat(location.coords.latitude);
      setLon(location.coords.longitude);
      await fetchWeatherData();
    })();
  }, [lon, lat]);
  return [loading, errMsg, weather];
};
