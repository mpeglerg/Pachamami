import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import { TouchableHighlight } from "react-native-gesture-handler";

const ProductGrid = ({ navigation }) => {
  const items = [
    {
      productName: "Product A",
      code: "#1abc9c",
      productDescription: "example text",
      productPrice: "50",
      productImages: [],
      productTags: { color: "blue", category: "tops" },
    },
    {
      productName: "Product B",
      code: "#2ecc71",
      productDescription: "example text",
      productPrice: "50",
      productImages: [],
      productTags: { color: "blue", category: "beauty" },
    },
    {
      productName: "Product C",
      code: "#3498db",
      productDescription: "example text",
      productPrice: "50",
      productImages: [],
      productTags: { color: "blue", category: "tops" },
    },
    {
      productName: "Product D",
      code: "#9b59b6",
      productDescription: "example text",
      productPrice: "50",
      productImages: [],
      productTags: { color: "blue", category: "tops" },
    },
    {
      productName: "Product E",
      code: "#34495e",
      productDescription: "example text",
      productPrice: "50",
      productImages: [],
      productTags: { color: "blue", category: "beauty" },
    },
    {
      productName: "Product F",
      code: "#16a085",
      productDescription: "example text",
      productPrice: "50",
      productImages: [],
      productTags: { color: "blue", category: "beauty" },
    },
    {
      productName: "Product G",
      code: "#27ae60",
      productDescription: "example text",
      productPrice: "50",
      productImages: [],
      productTags: { color: "blue", category: "beauty" },
    },
    {
      productName: "Product H",
      code: "#2980b9",
      productDescription: "example text",
      productPrice: "50",
      productImages: [],
      productTags: { color: "blue", category: "beauty" },
    },
    {
      productName: "Product I",
      code: "#8e44ad",
      productDescription: "example text",
      productPrice: "50",
      productImages: [],
      productTags: { color: "blue", category: "beauty" },
    },
    {
      productName: "Product J",
      code: "#2c3e50",
      productDescription: "example text",
      productPrice: "50",
      productImages: [],
      productTags: { color: "blue", category: "beauty" },
    },
    {
      productName: "Product K",
      code: "#f1c40f",
      productDescription: "example text",
      productPrice: "50",
      productImages: [],
      productTags: { color: "blue", category: "beauty" },
    },
    {
      productName: "Product L",
      code: "#e67e22",
      productDescription: "example text",
      productPrice: "50",
      productImages: [],
      productTags: { color: "blue", category: "beauty" },
    },
    {
      productName: "Product M",
      code: "#e74c3c",
      productDescription: "example text",
      productPrice: "50",
      productImages: [],
      productTags: { color: "blue", category: "beauty" },
    },
    {
      productName: "Product N",
      code: "#ecf0f1",
      productDescription: "example text",
      productPrice: "50",
      productImages: [],
      productTags: { color: "blue", category: "beauty" },
    },
    {
      productName: "Product O",
      code: "#95a5a6",
      productDescription: "example text",
      productPrice: "50",
      productImages: [],
      productTags: { color: "blue", category: "beauty" },
    },
    {
      productName: "Product P",
      code: "#f39c12",
      productDescription: "example text",
      productPrice: "50",
      productImages: [],
      productTags: { color: "blue", category: "beauty" },
    },
    {
      productName: "Product Q",
      code: "#d35400",
      productDescription: "example text",
      productPrice: "50",
      productImages: [],
      productTags: { color: "blue", category: "beauty" },
    },
    {
      productName: "Product R",
      code: "#c0392b",
      productDescription: "example text",
      productPrice: "50",
      productImages: [],
      productTags: { color: "blue", category: "beauty" },
    },
    {
      productName: "Product S",
      code: "#bdc3c7",
      productDescription: "example text",
      productPrice: "50",
      productImages: [],
      productTags: { color: "blue", category: "beauty" },
    },
    {
      productName: "Product T",
      code: "#7f8c8d",
      productDescription: "example text",
      productPrice: "50",
      productImages: [],
      productTags: { color: "blue", category: "beauty" },
    },
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
              productColor: item.code,
              productDescription: item.productDescription,
              productPrice: item.productPrice,
              productImages: item.productImages,
              productTags: item.productTags,
            })
          }
        >
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
