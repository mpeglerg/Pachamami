import React from "react";
import { Text, View, StyleSheet, Button, Animated } from "react-native";
import ProductCarousel from "./components/ProductCarousel";
import { TouchableHighlight } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";

import SlidingUpPanel from "rn-sliding-up-panel";

const ProductScreen = ({ navigation }) => {
  return (
    <View>
      <ProductCarousel navigation={navigation} />
      <TouchableHighlight style={styles.wishlist}>
        <FontAwesome name="heart-o" size={20} color="black" />
      </TouchableHighlight>
      <View style={styles.chosenItem}>
        <Text style={{ fontSize: "17px" }}>
          {JSON.stringify(
            navigation.getParam("productName", "Error getting product name")
          )}
        </Text>
        <Text style={{ fontSize: "17px" }}>$0.00</Text>
      </View>
      <View style={styles.itemInteractions}>
        <TouchableHighlight style={styles.cart}>
          <Button title="Add to Cart"></Button>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.descrip}
          // onPress={() => this._panel.show()}
        >
          <Button title="Product Description"></Button>
        </TouchableHighlight>
      </View>

      {/* <Button title="Show panel" onPress={() => this._panel.show()} />
      <SlidingUpPanel ref={(c) => (this._panel = c)}>
        <View style={styles.container}>
          <Text>Here is the content inside panel</Text>
          <Button title="Hide" onPress={() => this._panel.hide()} />
        </View>
      </SlidingUpPanel> */}
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
  wishlist: {
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 5,
    height: 40,
    width: 40,
    borderRadius: 100,
    backgroundColor: "#fff",
    alignItems: "center",
    alignSelf: "flex-end",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 2,
    marginRight: 25,
    marginTop: 10,
  },
  itemInteractions: {
    textAlign: "center",
    marginTop: "105%",
    padding: "10%",
    height: "100%",
  },
  descrip: {
    backgroundColor: "lightblue",
    padding: "1%",
    borderRadius: 3,
    width: "100%",
    marginVertical: 25,
  },
  cart: {
    backgroundColor: "lightblue",
    padding: "2%",
    borderRadius: 3,
    width: "100%",
  },
  chosenItem: {
    top: 430,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProductScreen;
