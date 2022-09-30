import "bootstrap/dist/css/bootstrap.min.css"
import React, { useEffect, useState } from 'react'
import './Weather.css'
import axios from 'axios';


export default function Weather() {
    const apiKey = "9e8582744d348572cc154c180f45c50b";
    const [data, setData] = useState({})
    const [input, setInput] = useState("")

    const weatherDetails = (cityName)=>{
        if(!cityName)return
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
        axios.get(url).then((resp)=>{
            // console.log("respose", resp.data)
            setData(resp.data)
        }).catch((error)=>{
            console.log("error", error)
        })
    }
    const handleChangeInput=(e)=>{
       setInput(e.target.value)

    }
    const handleSearch =()=>{
        weatherDetails(input)
    }
    useEffect(()=>{
         weatherDetails("Delhi")

    }, [])

  return (
    <div className="col-md-12">
        <div className="weatherBg">
            <h1 className="heading">Weather App</h1>
            <div className="d-grid gap-3 col-4 mt-4">
            <input type="text" className="form-control input" onChange={handleChangeInput} />
            <button className="btn btn-primary" type="button" onClick={handleSearch}>Search</button>
            </div>
        </div>
        <div className="col-md-12 text-center mt-4">
            <div className="shadow rounded weatherResultBox">
                <img className="weatherIcon" src="https://www.freeiconspng.com/thumbs/weather-icon-png/weather-icon-png-2.png" alt="" />
                <h5 className="weatherCity">{data?.name}</h5>
                <h6 className="weatherTemp">{((data?.main?.temp)-273.15).toFixed(1)}°C</h6>

            </div>
        </div>
    </div>
  )
}
