import { View, Text, Button, StyleSheet, SafeAreaView } from "react-native";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{`count: ${count}`}</Text>
      <Button
        color={"red"}
        title="Increase the count"
        onPress={() => {
          setCount((prev) => prev + 1);
        }}
      />
      <Button
        color={"green"}
        title="Decrease the count"
        onPress={() => {
          setCount((prev) => prev - 1);
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
  },
  title: {
    alignSelf: "center",
    fontSize: 25,
    marginTop: 25,
  },
});

export default Counter;
