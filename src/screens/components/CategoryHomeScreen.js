import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import { TouchableHighlight } from "react-native-gesture-handler";

const CategoryHomeScreen = ({ navigation }) => {
  const items = [
    { categoryName: "Tops", code: "#1abc9c" },
    { categoryName: "Bottoms", code: "#2ecc71" },
    { categoryName: "Accessories", code: "#3498db" },
    { categoryName: "Beauty", code: "#9b59b6" },
  ];

  return (
    <FlatGrid
      numColumns={1}
      itemDimension={500}
      items={items}
      style={styles.gridView}
      renderItem={({ item, index }) => (
        <TouchableHighlight
          onPress={() =>
            navigation.navigate("Shop", {
              categoryName: item.categoryName,
            })
          }>
          <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
            <Text style={styles.itemName}>{item.categoryName}</Text>
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
  },
  itemContainer: {
    justifyContent: "flex-end",
    borderRadius: 5,
    padding: 10,
    height: 150,
    width: "100%",
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
export default CategoryHomeScreen;
