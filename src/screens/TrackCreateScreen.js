import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import { requestForegroundPermissionsAsync } from "expo-location";
import { Map } from "../components/Map";

const TrackCreateScreen = () => {
  const [error, setError] = useState(null);

  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      if (!granted) {
        throw new Error("Location permission not granted");
      }
    } catch (error) {
      setError(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView forceInset={{top:"always"}}>
      <Text h3>create</Text>
      <Map />
      {error ? <Text>Please enable locaion</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
