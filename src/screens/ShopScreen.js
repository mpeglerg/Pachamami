import React from "react";
import { View } from "react-native";
import CategoryHomeScreen from "./components/CategoryHomeScreen";

const ShopScreen = ({ navigation }) => {
  return (
    <View
      title
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <CategoryHomeScreen navigation={navigation} />
    </View>
  );
};

export default ShopScreen;
