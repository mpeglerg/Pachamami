import React from "react";
import { Text, View, Button } from "react-native";

const CategoryScreen = ({ navigation }) => {
  return (
    <View
      title
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Category Screen</Text>
      <Button
        title="Shop Category"
        onPress={() => navigation.navigate("Shop")}></Button>
    </View>
  );
};

export default CategoryScreen;
