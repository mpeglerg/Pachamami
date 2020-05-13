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
import CategoryScreen from "./src/screens/CategoryScreen";
import ProductScreen from "./src/screens/ProductScreen";

const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Product: { screen: ProductScreen },
  Category: { screen: CategoryScreen },
});

const CategoryStack = createStackNavigator({
  Category: CategoryScreen,
  Shop: ShopScreen,
});

export default createAppContainer(
  createBottomTabNavigator(
    {
      Home: { screen: HomeStack },
      About: AboutScreen,
      Shop: CategoryStack,
      Wishlist: WishlistScreen,
      Contact: ContactUsScreen,
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

          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
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
