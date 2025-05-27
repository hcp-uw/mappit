import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Mapbox, {MapView, Camera} from "@rnmapbox/maps";
import { MAPBOX_TOKEN } from '@env';

Mapbox.setAccessToken(MAPBOX_TOKEN);

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