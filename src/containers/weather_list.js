import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {

 RenderWeather(cityData){
    const name = cityData.city.name;    
    const temps = cityData.list.map(weather => weather.main.temp);
    //esta definicion dice que "a queda item "list" en cityData, voy a llamarlo weather, y quiero en esta funcion retornar
    //lo que hay dentro de main y temp
    return (
            <tr key={name}>
                <td>{name}</td>
                <td>
                    <Chart data={temps} color='red'/>
                </td>
            </tr>
        );
    }

 render() {
    return (
        <table className='table table-hover'>
            <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature</th>
                    <th>Presure</th>
                    <th>Humidity</th>
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
