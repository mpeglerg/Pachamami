import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeScreen from "./src/screens/HomeScreen";
import ShopScreen from "./src/screens/ShopScreen";
import AboutScreen from "./src/screens/AboutScreen";
import ContactUsScreen from "./src/screens/ContactUsScreen";
import WishlistScreen from "./src/screens/WishlistScreen";
import ShopCategoryScreen from "./src/screens/ShopCategoryScreen";
import ProductScreen from "./src/screens/ProductScreen";

const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Product: { screen: ProductScreen },
  Shop: { screen: ShopCategoryScreen },
});

const CategoryStack = createStackNavigator({
  "Shop All": ShopScreen,
  Shop: { screen: ShopCategoryScreen },
  Product: { screen: ProductScreen },
});

const WishlistStack = createStackNavigator({
  "My Wishlist": { screen: WishlistScreen },
  Shop: { screen: ShopCategoryScreen },
});

export default createAppContainer(
  createBottomTabNavigator(
    {
      Home: { screen: HomeStack },
      About: { screen: AboutScreen },
      Shop: { screen: CategoryStack },
      Wishlist: { screen: WishlistStack },
      Contact: { screen: ContactUsScreen },
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === "About") {
            iconName = `ios-information-circle${focused ? "" : "-outline"}`;
          } else if (routeName === "Contact") {
            iconName = `ios-options${focused ? "" : "-outline"}`;
          }
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: "magenta",
        inactiveTintColor: "gray",
      },
    }
  )
);
