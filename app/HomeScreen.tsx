import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Mapbox, {MapView} from "@rnmapbox/maps";


Mapbox.setAccessToken("pk.eyJ1Ijoic2Vhbmx1dSIsImEiOiJjbTd2MjB5bWowNzV5MmpuNGptbTNocjdnIn0.dNhHkY6L8_EC1VAmK-obaw");

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    container: {
        height: 300,
        width: 300,
        backgroundColor: "tomato"
    },
    map: {
        flex: 1
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
            <MapView style={styles.map} />
          </View>
        </View>
      );
    }
  }