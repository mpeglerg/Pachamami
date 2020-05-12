import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }
  console.log("Navigation: ", navigation);
  return (
    <View>
      <Text>Your Count:</Text>
      <Text>{count}</Text>
      <Button title="UP" onPress={increment} />
      <Button title="DOWN" onPress={decrement} />
      <Button title="RESET" onPress={reset} />
      {/* <Button title="TODO" onPress={navigation.navigate} /> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
/*React Native Notes:
    string param aligns with name from App.js ("Home") for this page
    navigation.navigate("NameOfScreen") used to move between pages
    Parts of screens: components, in own folder and no nav associated with them
*/
