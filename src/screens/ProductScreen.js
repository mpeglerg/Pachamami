import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import ProductCarousel from "./components/ProductCarousel";

const ProductScreen = ({ navigation }) => {
  return (
    <View>
      <ProductCarousel navigation={navigation} />
      {/* <View
        title
        style={[
          styles.itemContainer,
          {
            backgroundColor: navigation.getParam("productColor", "#000"),
          },
        ]}>
      </View> */}
      <Button title="Add to Wishlist" />
      <Text>
        {JSON.stringify(
          navigation.getParam("productName", "Error getting product name")
        )}
      </Text>
      <Text>$0.00</Text>
      <Button title="Add to Cart"></Button>
      <Button title="Product Description"></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: "flex-end",
    borderRadius: 5,
    padding: 10,
    height: 400,
  },
  itemName: {
    fontSize: 16,
    color: "#000",
    fontWeight: "600",
  },
});

export default ProductScreen;
