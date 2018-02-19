import React from 'react';
import MarkerManager from '../util/marker_manager';

import {withRouter} from 'react-router-dom';

class BenchMap extends React.Component {
    constructor (props) {
        super(props);
        this.markerManager = null;
    }


    componentDidMount () {

        const mapOptions = {
            center: {lat: 47.559352, lng: -122.386235},
            zoom: 10.5
        };

        const map_container = document.getElementById("map-container");

        const map = new google.maps.Map(map_container, mapOptions);

        // var marker = new google.maps.Marker({
        //     position: mapOptions.center,
        //     map: map,
        //   });

        this.markerManager = new MarkerManager(map);

        
    }

    componentDidUpdate () { 
        if (this.props.benches) {
            this.markerManager.updateMarkers(this.props.benches); 
        } 

    }

    handleClick (coords) {
        this.props.history.push({
            pathname: "benches/new",
            search: `lat=${coords.lat}&lng=${coords.lng}`
        });
    }

 
    render () {
        return (
            <div id="map-container">
               
            </div>
        )
    }

}

export default withRouter(BenchMap);