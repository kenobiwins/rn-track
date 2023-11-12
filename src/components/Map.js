import React from "react";
import { StyleSheet } from "react-native";
import MapView, { Polyline } from "react-native-maps";

export function Map() {

  return (
    <>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 50.565437,
          longitude: 30.100707,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Polyline />
      </MapView>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});
