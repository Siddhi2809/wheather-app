import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './searchBox.css';
import { useState } from 'react';

export default function SearchBox({ updateinfo }) {
    const [city, setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "8ff4475d8cef9cd9afc57181c68269c8";

    const getWeatherInfo = async () => {
        try {
            const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            const jsonResponse = await response.json();

            if (response.ok) {
                const result = {
                    city: jsonResponse.name,
                    temp: jsonResponse.main.temp,
                    tempMin: jsonResponse.main.temp_min,
                    tempMax: jsonResponse.main.temp_max,
                    feelslike: jsonResponse.main.feels_like,
                    humidity: jsonResponse.main.humidity,
                    weather: jsonResponse.weather[0].main,
                    icon: jsonResponse.weather[0].icon,
                };
                return result;
            } else {
                alert(jsonResponse.message);
                return null;
            }
        } catch (error) {
            alert("Failed to fetch weather info. Try again.");
            return null;
        }
    };

    const handleChange = (evt) => {
        setCity(evt.target.value);
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        if (city.trim() === "") {
            alert("Please enter a city name.");
            return;
        }
        const newInfo = await getWeatherInfo();
        if (newInfo) {
            updateinfo(newInfo);
            setCity("");
        }
    };

    return (
        <div className='searchBox'>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    type="search"
                    variant="filled"
                    value={city}
                    onChange={handleChange}
                />
                <br /><br />
               
                <Button variant="contained" type='submit' disabled={!city.trim()}>
                    Search
                </Button>
            </form>
        </div>
    );
}
