import React from "react";
import { Text, View } from "react-native";

const ProductScreen = ({ navigation }) => {
  return (
    <View
      title
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>
        {JSON.stringify(
          navigation.getParam("productName", "Error getting product name")
        )}
      </Text>
    </View>
  );
};

export default ProductScreen;
