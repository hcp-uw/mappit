import React, { Component, useMemo, useRef, useCallback, useEffect, useState } from "react";
import { StyleSheet, View, Text, ImageBackground, Image } from "react-native";
import Mapbox, {MapView, Camera, PointAnnotation} from "@rnmapbox/maps";
import BottomSheet, { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';

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
    },
    marker: {
      width: 20,
      height: 20,
      backgroundColor: 'red',
      borderRadius: 10,
    },
    markerPadding: {
      width: 50,          // increase touchable area
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
    },
    markerLabel: {
      fontSize: 12,
      color: '#333',
      textAlign: 'center',
    },
    sheetContent: {
      padding: 20,
    },
    title: {
      fontWeight: '600',
      fontSize: 18,
      marginBottom: 10,
    },
    imageIcon: {
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25,
      overflow: 'hidden',       // IMPORTANT to clip the image inside the borderRadius
      backgroundColor: '#ccc',
      borderWidth: 2,
      borderColor: 'white',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 3,
    },
    image: {
      width: 300,
      height: 300,
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',       // IMPORTANT to clip the image inside the borderRadius
      backgroundColor: '#ccc',
      margin: 20
    }
})

 
const App = () => {
    const [selectedPlace, setSelectedPlace] = useState<'cse2' | 'hub' | 'quad'>();
      
    const bottomSheetRef = useRef<BottomSheetModal>(null);
    const cse2Ref = useRef<PointAnnotation>(null);
    const hubRef = useRef<PointAnnotation>(null);
    const quadRef = useRef<PointAnnotation>(null);

    const snapPoints = useMemo(() => ['25%', '50%'], []);

    const openSheet = (place: 'cse2' | 'hub' | 'quad') => {
      setSelectedPlace(place);
      bottomSheetRef.current?.present();
    };  
  
    useEffect(() => {
      Mapbox.setTelemetryEnabled(false);
    }, []);   

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
                  <PointAnnotation
                    id="cse2"
                    coordinate={[-122.305016, 47.653135]}
                    onSelected={() => openSheet('cse2')}
                    ref={cse2Ref} 
                  >
                      <Image
                        source={require('../assets/images/wesleypfp.jpg')}
                        onLoad={() => cse2Ref.current?.refresh()}
                        style={styles.imageIcon}
                      />
                  </PointAnnotation>
                  <PointAnnotation
                    id="hub"
                    coordinate={[-122.30509407272908, 47.6554265145316]}
                    onSelected={() => openSheet('hub')}
                    ref={hubRef} 
                  >
                    <Image
                        source={require('../assets/images/seanluu.jpg')}
                        onLoad={() => hubRef.current?.refresh()}
                        style={styles.imageIcon}
                      />
                  </PointAnnotation>
                  <PointAnnotation
                    id="quad"
                    coordinate={[-122.306994, 47.657557]}
                    onSelected={() => openSheet('quad')}
                    ref={quadRef} 
                  >
                    <Image
                        source={require('../assets/images/seanliu.jpeg')}
                        onLoad={() => quadRef.current?.refresh()}
                        style={styles.imageIcon}
                      />
                  </PointAnnotation>
          </MapView>

          <BottomSheetModal
            ref={bottomSheetRef}
            index={0}
            snapPoints={snapPoints}
          >
             <BottomSheetView style={styles.sheetContent}>
                {selectedPlace === 'cse2' && (
                  <View>
                    <Text style={styles.title}>Studying At CSE2</Text>
                    <Text>wesleyli - Bill & Melinda Gates Center</Text>
                    <Image
                          source={require('../assets/images/cse2.jpg')}
                          style={styles.image}
                        />
                </View>
                )}
                {selectedPlace === 'hub' && (
                  <View>
                    <Text style={styles.title}>Orange Chicken From Firecracker🔥</Text>
                    <Text>seanliu - Husky Union Building</Text>
                    <Image
                          source={require('../assets/images/hub.jpeg')}
                          style={styles.image}
                        />
                </View>
                )}
                {selectedPlace === 'quad' && (
                  <View>
                    <Text style={styles.title}>Cherry Blossoms in the Quad!</Text>
                    <Text>seanluu - The Quad</Text>
                    <Image
                          source={require('../assets/images/quad.jpeg')}
                          style={styles.image}
                        />
                </View>
                )}
             </BottomSheetView>
            
          </BottomSheetModal>
        </View>
      </View>
    );
  }
  export default App;