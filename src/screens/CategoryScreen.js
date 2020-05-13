import React from "react";
import { Text, View, Button } from "react-native";

const CategoryScreen = ({ navigation }) => {
  return (
    <View
      title
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>
        {JSON.stringify(
          navigation.getParam("categoryName", "Shop All Products")
        )}
      </Text>
    </View>
  );
};

export default CategoryScreen;
