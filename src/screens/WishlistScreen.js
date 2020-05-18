import React from "react";
import { View } from "react-native";
import WishListItem from "./components/WishListItem";
import { ScrollView } from "react-native-gesture-handler";

const WishlistScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View title>
        <WishListItem navigation={navigation} />
        <WishListItem navigation={navigation} />
      </View>
    </ScrollView>
  );
};

export default WishlistScreen;
