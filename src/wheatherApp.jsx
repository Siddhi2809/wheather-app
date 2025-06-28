import { useState } from "react";
import SearchBox from "./searchBox";
import WheatherBox from "./wheatherBox";
import  "./weatherApp.css";


export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Pune",
        feelslike: 24.84,
        humidity: 47,
        temp: 25.05,
        tempMax: 25.05,
        tempMin: 25.05,
        weather: "Haze",
        icon: "50d", // default icon
    });

    const updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div>
            <h2 className="app-container">Weather App</h2>
            <SearchBox updateinfo={updateInfo} />
            <WheatherBox info={weatherInfo} />
        </div>
    );
}
