import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const WishListItem = ({ navigation }) => {
  return (
    <View>
      <View
        title
        style={[
          styles.itemContainer,
          {
            backgroundColor: "#1abc9c",
          },
        ]}
      ></View>
      <Text>Product Name</Text>
      <Text>$0.00</Text>
      <Button
        title="Add to Cart"
        onPress={() =>
          navigation.navigate("My Cart", {
            productName: "Product A",
            productColor: "#1abc9c",
            // productDescription: productDescription,
            productPrice: "$75",
            // productImages: item.productImages,
            // productTags: item.productTags,
          })
        }
      ></Button>
      <Button title="Remove from Wishlist"></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: "flex-end",
    borderRadius: 5,
    padding: 10,
    height: 200,
    width: 200,
  },
  itemName: {
    fontSize: 16,
    color: "#000",
    fontWeight: "600",
  },
});

export default WishListItem;
