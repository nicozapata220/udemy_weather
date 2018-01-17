import React, { Component } from 'react'

export default class GoogleMap extends Component {
    componentDidMount(){
        new google.maps.Map(this.refs.map,{
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }
    render() {
        //agregando el ref="map" puedo usar el this.refs.map
        return <div ref="map" />
  }
}
