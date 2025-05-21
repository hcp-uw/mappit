import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Mapbox, {MapView, Camera} from "@rnmapbox/maps";


Mapbox.setAccessToken("sk.eyJ1Ijoic2Vhbmx1dSIsImEiOiJjbWF4MHE1a2kwbDN2Mm5vaXhreHE3Y2R2In0.Z1IhV2SDnwGdU1FR0v4qwg");

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    },
    container: {
        flex: 1,
        width: "100%",
        height: '100%',
        backgroundColor: "tomato"
    },
    map: {
        flex: 1,
        paddingTop: -100
    }
})
 
export default class App extends Component {
    componentDidMount() {
      Mapbox.setTelemetryEnabled(false);
    }
  
    render() {
      return (
        <View style={styles.page}>
          <View style={styles.container}>
            <MapView style={styles.map} styleURL={Mapbox.StyleURL.SatelliteStreet}> 
                <Camera
                    zoomLevel={13}
                    centerCoordinate={[-122.3035, 47.6556]} // longitude, latitude (UW)
                    pitch={0}
                    heading={0}
                    animationMode={'flyTo'}
                    animationDuration={1000}/>
            </MapView>
          </View>
        </View>
      );
    }
  }