import React from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import { useGetWeather } from "./src/hooks/useGetWeather";
import ErrorItem from "./src/components/ErrorItem";

function App() {
  const [loading, errMsg, weather] = useGetWeather();

  if (weather && weather.list && !loading) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    );
  }

  return (
    <View style={styles.container}>
      {errMsg ? (
        <ErrorItem />
      ) : (
        <ActivityIndicator size={"large"} color={"blue"} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
  },
});

export default App;
