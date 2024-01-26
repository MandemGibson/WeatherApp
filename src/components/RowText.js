import { View, Text } from "react-native";
import React from "react";

const RowText = (props) => {
  const {
    containerStyles,
    messageOneStyles,
    messageTwoStyles,
    messageOne,
    messageTwo,
  } = props;
  return (
    <View style={containerStyles}>
      <Text style={messageOneStyles}>{messageOne}</Text>
      <Text style={messageTwoStyles}>{messageTwo}</Text>
    </View>
  );
};

export default RowText;
