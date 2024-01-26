import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const IconText = ({ iconName, bodyText, iconColor, bodyTextStyles }) => {
  return (
    <View style={styles.container}>
      <Feather name={iconName} size={50} color={iconColor} />
      <Text style={[styles.textTheme, bodyTextStyles]}>{bodyText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  textTheme: {
    fontWeight: "bold",
  },
});

export default IconText;
