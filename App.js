import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import AboutScreen from "./src/screens/AboutScreen";
import ContactUsScreen from "./src/screens/ContactUsScreen";
import ShopScreen from "./src/screens/ShopScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    About: {
      screen: AboutScreen,
      navigationOptions: { title: "About Pachamami" },
    },
    Shop: {
      screen: ShopScreen,
      navigationOptions: { title: "Shop" },
    },
    Contact: {
      screen: ContactUsScreen,
      navigationOptions: { title: "Contact Us" },
    },
  },
  {
    //What people see when they open the app
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Pachamami Home",
    },
  }
);

export default createAppContainer(navigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
