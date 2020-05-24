import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
// import Carousel from "react-native-carousel-view";

const ProductCarousel = ({ navigation }) => {
  return (
    <View
      title
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* <Carousel width={375} height={450} delay={2000} hideIndicators={true}>
        <View
          title
          style={[
            styles.itemContainer,
            {
              backgroundColor: "#1abc9c",
            },
          ]}
        />
        <View
          title
          style={[
            styles.itemContainer,
            {
              backgroundColor: "#34495e",
            },
          ]}
        />
        {/* <Button title="Add to Wishlist" /> */}
      {/* </Carousel> */}
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: "flex-end",
    borderRadius: 5,
    padding: 10,
    // height: "70%",
  },
  itemName: {
    fontSize: 16,
    color: "#000",
    fontWeight: "600",
  },
});

export default ProductCarousel;
