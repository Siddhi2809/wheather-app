import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function WheatherBox({ info }) {
    const iconUrl = `https://openweathermap.org/img/wn/${info.icon}@2x.png`;

    return (
        <div>
            <h3>Weather Info</h3>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={iconUrl}
                        alt="weather icon"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Temperature: {info.temp}°C
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Feels Like: {info.feelslike}°C
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Min Temperature: {info.tempMin}°C
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Max Temperature: {info.tempMax}°C
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Humidity: {info.humidity}%
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Weather: {info.weather}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}
