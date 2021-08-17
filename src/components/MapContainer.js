import React, { Component } from "react";
import { Map, GoogleApiWrapper} from "google-maps-react";
import mapStyles from "./Mapstyles";

class MapContainer extends Component {
  render() {
    return (
      <div className="" style={{ position: "relative", height: "500px" }}>
        <Map
          google={this.props.google}
          zoom={14}
          styles={mapStyles.styles}
          initialCenter={{
            lat: 51.509865,
            lng: -0.118092,
          }}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyALMZqt0Qwm-r_S8Xbio-rATFRajPiv3-g",
})(MapContainer);
