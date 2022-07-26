import{
    useState
} from 'react'
import Form from './Form';

const WeaterPanel = () => {
    let URLWeather = "https://api.openweathermap.org/data/2.5/weather?appid=1a83daee88926c75b51f8d2a37ef91d4";
    let URLCity = "&q=";

    let URLForecast = "https://api.openweathermap.org/data/2.5/forecast?appid=1a83daee88926c75b51f8d2a37ef91d4"

    const [weather, setWeather] = useState([]);
    const [forecast, SetForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState('');

    const getLocation = async (loc) => {
        setLoading(true);
        setLocation(loc);
    
    URLWeather = URLWeather + URLCity + loc;


/* ======================weather ====================================== */

    console.log(URLWeather);

    await fetch(URLWeather).then((response) => {
        // eslint-disable-next-line no-throw-literal
        if (response.ok) throw {response}
        return response.json();
    }).then((wheaterData)=>{
        console.log(wheaterData);
        setWeather(wheaterData);
    }).catch(error=>{
        console.log(error);
        setLoading(false);
        setShow(false);
    });


    /* ====================== Forecast ====================================== */

    URLForecast = URLForecast + URLCity + loc;

    await fetch(URLForecast).then((response) => {
        if (response.ok) throw {response}
        return response.json();
    }).then((forecastData)=>{
        console.log(forecastData);
        setWeather(forecastData);
        setLoading(false);
        setShow(true);
    }).catch(error=>{
        console.log(error);
        setLoading(false);
        setShow(false);
    });


}

return(
<>
<Form newLocation={getLocation}/>

</>)

}

export default WeaterPanel