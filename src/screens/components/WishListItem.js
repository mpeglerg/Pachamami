import React, { useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const WishListItem = ({ navigation }) => {
  const [itemQuantity, setItemQuantity] = useState(1);
  function incrementQuantity() {
    setItemQuantity(itemQuantity + 1);
  }
  function decrementQuantity() {
    if (itemQuantity == 0) {
      setItemQuantity(itemQuantity);
    } else {
      setItemQuantity(itemQuantity - 1);
    }
  }
  return (
    <View>
      <View
        title
        style={[
          styles.itemContainer,
          {
            backgroundColor: "#1abc9c",
          },
        ]}></View>
      <Text>Product Name</Text>
      <Text>$0.00</Text>
      <Text>{itemQuantity}</Text>
      <Button title="Add to Cart"></Button>
      {/* <Button title="+" onPress={incrementQuantity}></Button>
      <Button title="-" onPress={decrementQuantity}></Button> */}
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
