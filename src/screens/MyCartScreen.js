import React from "react";
import { Text, View, Button } from "react-native";
import WishListItem from "./components/WishListItem";
import { ScrollView } from "react-native-gesture-handler";
import CartItem from "./components/CartItem";

const MyCartScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View>
        <CartItem navigation={navigation} />
      </View>
      <Button title="Checkout"></Button>
    </ScrollView>
  );
};

export default MyCartScreen;
