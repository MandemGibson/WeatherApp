import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";
import { weatherType } from "../utilities/weatherType";

export default function CurrentWeather({ weatherData }) {
  const {
    container,
    wrapper,
    tempStyles,
    feels,
    highLow,
    highLowWrapper,
    bodyWrapper,
    description,
    message,
  } = styles;

  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData;

  const weatherCondition = weather[0]?.main;

  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: weatherType[weatherCondition]?.backgroundColor },
      ]}
    >
      <View style={container}>
        <Feather
          name={weatherType[weatherCondition]?.icon}
          size={100}
          color="white"
        />
        <Text style={tempStyles}>{`${temp}°`}</Text>
        <Text style={feels}>{`Feels like ${feels_like}°`}</Text>
        <RowText
          containerStyles={highLowWrapper}
          messageOne={`High: ${temp_max}° `}
          messageOneStyles={highLow}
          messageTwo={`Low : ${temp_min}°`}
          messageTwoStyles={highLow}
        />
      </View>
      <RowText
        containerStyles={bodyWrapper}
        messageOne={weather[0]?.description}
        messageOneStyles={description}
        messageTwo={weatherType[weatherCondition]?.message}
        messageTwoStyles={message}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    flex: 1,
  },
  tempStyles: {
    color: "black",
    fontSize: 48,
  },
  feels: {
    fontSize: 30,
    color: "black",
  },
  highLow: {
    fontSize: 20,
    color: "black",
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 43,
  },
  message: {
    fontSize: 25,
  },
});
