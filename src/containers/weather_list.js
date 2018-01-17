import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map'

class WeatherList extends Component {

 RenderWeather(cityData){
    const name = cityData.city.name;    
    const temps = cityData.list.map(weather => weather.main.temp);
    const presures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const {lon,lat} = cityData.city.coord;
    
    //esta definicion dice que "a queda item "list" en cityData, voy a llamarlo weather, y quiero en esta funcion retornar
    //lo que hay dentro de main y temp
    return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td><Chart data={temps} color='red' units ='K'/></td>
                <td><Chart data={presures} color='green'units='hPa'/></td>
                <td><Chart data={humidities} color='black' units='%'/></td>
            </tr>
        );
    }

 render() {
    return (
        <table className='table table-hover'>
            <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (K)</th>
                    <th>Presure (Hpa)</th>
                    <th>Humidity (%)</th>
                </tr>
            </thead>
            <tbody>
                {this.props.weather.map(this.RenderWeather)}
            </tbody>
        </table>
    )
  }
}


const mapStateToProps = (state) => ({
     weather: state.weather
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps,mapDispatchToProps)(WeatherList)
