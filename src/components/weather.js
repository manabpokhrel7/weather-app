import React, {useState , useEffect} from 'react';
import  './Weather.css'
import Wavesdiv from './Wavesdiv';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStreetView } from '@fortawesome/free-solid-svg-icons';
const Weather = () => {
const [city , setCity] = useState(null);
const [search , setSearch] = useState("pune");

useEffect( () =>{
  const fetchApi = async () =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=2486724a67ce6c2461599fbfdf0a09aa`
    const response = await fetch(url);
    const resJson = await response.json();
    setCity(resJson.main);
  }
  fetchApi();
}, [search])
  return (
   
    <div className='box'>
   <div className='space'></div>
     <div className='inputData'>
       <input type="search"
       className='inputfield'
       value = {search}
       onChange={(event)=>{setSearch(event.target.value)}} />
     </div>

    {!city ? (
      <p>no data found</p>
    ):(
      <div>
<div className='info'>
       <h2 className='location'>
       <FontAwesomeIcon className='font' icon={faStreetView} />{search}
       </h2>
       <h1 className='temp'>
        {city.temp}°<p className='showtext'>Farenheit</p>
       </h1>
       <p className='showtext' style={{ fontSize: '20px',color: 'black',fontWeight:500 }}>Minimum Temperature={city.temp_min}°F</p><br></br>
       <br></br><br></br>
       <p className='showtext'style={{ fontSize: '20px',color: 'black',fontWeight:500 }}>Maximum Temperature={city.temp_max}°F</p>
     </div>
     </div>
    )}
    <Wavesdiv />
      </div>
      
  )
}
export default Weather;