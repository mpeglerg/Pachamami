import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import { TouchableHighlight } from "react-native-gesture-handler";

const ModelGrid = ({ navigation }) => {
  const items = [
    { productName: "Model A", code: "#1abc9c" },
    { productName: "Model B", code: "#2ecc71" },
    { productName: "Model C", code: "#3498db" },
    { productName: "Model D", code: "#9b59b6" },
    { productName: "Model E", code: "#34495e" },
    { productName: "Model F", code: "#16a085" },
    { productName: "Model G", code: "#27ae60" },
    { productName: "Model H", code: "#2980b9" },
    { productName: "Model I", code: "#8e44ad" },
  ];

  return (
    <View>
      <FlatGrid
        itemDimension={130}
        items={items}
        style={styles.gridView}
        renderItem={({ item, index }) => (
          <TouchableHighlight
            onPress={() =>
              navigation.navigate("Model Spotlight", {
                modelName: item.productName,
                modelColor: item.code,
              })
            }>
            <View
              style={[styles.itemContainer, { backgroundColor: item.code }]}>
              <Text style={styles.itemName}>{item.productName}</Text>
              <Text style={styles.itemCode}>{item.code}</Text>
            </View>
          </TouchableHighlight>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  gridView: {
    marginTop: 20,
    flex: 1,
    height: "100%",
  },
  itemContainer: {
    justifyContent: "flex-end",
    borderRadius: 5,
    padding: 10,
    height: 100,
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
export default ModelGrid;
