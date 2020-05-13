import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import { TouchableHighlight } from "react-native-gesture-handler";

const ProductGrid = ({ navigation }) => {
  const items = [
    { productName: "Product A", code: "#1abc9c" },
    { productName: "Product B", code: "#2ecc71" },
    { productName: "Product C", code: "#3498db" },
    { productName: "Product D", code: "#9b59b6" },
    { productName: "Product E", code: "#34495e" },
    { productName: "Product F", code: "#16a085" },
    { productName: "Product G", code: "#27ae60" },
    { productName: "Product H", code: "#2980b9" },
    { productName: "Product I", code: "#8e44ad" },
    { productName: "Product J", code: "#2c3e50" },
    { productName: "Product K", code: "#f1c40f" },
    { productName: "Product L", code: "#e67e22" },
    { productName: "Product M", code: "#e74c3c" },
    { productName: "Product N", code: "#ecf0f1" },
    { productName: "Product O", code: "#95a5a6" },
    { productName: "Product P", code: "#f39c12" },
    { productName: "Product Q", code: "#d35400" },
    { productName: "Product R", code: "#c0392b" },
    { productName: "Product S", code: "#bdc3c7" },
    { productName: "Product T", code: "#7f8c8d" },
  ];

  return (
    <FlatGrid
      itemDimension={130}
      items={items}
      style={styles.gridView}
      renderItem={({ item, index }) => (
        <TouchableHighlight
          onPress={() =>
            navigation.navigate("Product", {
              productName: item.productName,
            })
          }>
          <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
            <Text style={styles.itemName}>{item.productName}</Text>
            <Text style={styles.itemCode}>{item.code}</Text>
          </View>
        </TouchableHighlight>
      )}
    />
  );
};

const styles = StyleSheet.create({
  gridView: {
    marginTop: 20,
    flex: 1,
    // height: 50,
  },
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
  itemCode: {
    fontWeight: "600",
    fontSize: 12,
    color: "#fff",
  },
});
export default ProductGrid;
