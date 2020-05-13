import React from "react";
import { Text, View, StyleSheet } from "react-native";

const ProductScreen = ({ navigation }) => {
  return (
    <View
      title
      style={[
        styles.itemContainer,
        {
          backgroundColor: navigation.getParam("productColor", "#000"),
        },
      ]}
      //   style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text style={styles.itemName}>
        {JSON.stringify(
          navigation.getParam("productName", "Error getting product name")
        )}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: "flex-end",
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
});

export default ProductScreen;
