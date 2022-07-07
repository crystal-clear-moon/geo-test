import React, { useEffect, useState } from "react";
import "./styles.css";
import { API_URL, requestOptions } from "./const";
import axios from "axios"

export default function App() {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  }>({ latitude: 0, longitude: 0 });
  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [max, min, val] = [
      parseFloat(e.target.max),
      parseFloat(e.target.min),
      parseFloat(e.target.value)
    ];
    if (max >= val && min <= val) {
      setLocation((prev) => ({
        ...prev,
        [e.target.name]: val
      }));
    }
  };
  const getTimeZone = async () => {
    console.log(
      `${API_URL}&lat=${location.latitude}&lng=${location.longitude}`);
    const res = await axios.get(`${API_URL}&lat=${location.latitude}&lng=${location.longitude}`);
    console.log(res)
  };

  useEffect(() => {
    getTimeZone();
  }, [location]);
  return (
    <div className="App">
      <h1>Input Latitude and Longitude</h1>
      <h2>Latitude: </h2>
      <input
        type="number"
        name="latitude"
        value={location.latitude}
        onChange={handleLocationChange}
        min="-90"
        max="90"
      />
      <h2>Longitude: </h2>
      <input
        type="number"
        name="longitude"
        value={location.longitude}
        onChange={handleLocationChange}
        min="-180"
        max="180"
      />
    </div>
  );
}
