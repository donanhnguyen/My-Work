
class MarkerManager {

    constructor(map) {
      this.map = map;
      this.markers = {};
    }


    updateMarkers (benches) {

        for (let i = 0; i < benches.length; i++) {
            if (this.markers[benches.indexOf(benches[i])] === undefined) {
                
                let newPosition = { lat: benches[i].lat, lng: benches[i].lng  };
               
                let newMarker = new google.maps.Marker({
                    position: newPosition,
                    map: this.map
                })

                this.markers[benches.indexOf(benches[i])] = newMarker;
            }
        }

    }

    

}  

export default MarkerManager