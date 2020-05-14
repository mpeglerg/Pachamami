import React from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import Carousel from "react-native-carousel-view";
import ProductGrid from "./components/ProductGrid";
import HomePageCarousel1 from "./images/HomePageCarousel1.jpeg";
import HomePageCarousel2 from "./images/HomePageCarousel2.jpeg";
import { ScrollView } from "react-native-gesture-handler";
import CategoryHomeScreen from "./components/CategoryHomeScreen";
const HomeScreen = ({ navigation }) => {
  console.log("Navigation: ", navigation);
  return (
    <ScrollView style={{ flex: 1 }}>
      <Carousel
        width={375}
        height={250}
        delay={2000}
        hideIndicators={true}
        // indicatorAtBottom={true}
        // indicatorSize={20}
        // indicatorText="✽"
        // indicatorColor="red"
      >
        <View style={styles.contentContainer}>
          <Image
            source={HomePageCarousel1}
            style={{ width: 380, height: 250 }}></Image>
        </View>
        <View style={styles.contentContainer}>
          <Image
            source={HomePageCarousel2}
            style={{ width: 380, height: 250 }}></Image>
        </View>
      </Carousel>
      <CategoryHomeScreen navigation={navigation} />
      <Text>Shop Our Feed</Text>
      <ProductGrid navigation={navigation} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
/*React Native Notes:
    string param aligns with name from App.js ("Home") for this page
    navigation.navigate("NameOfScreen") used to move between pages
    Parts of screens: components, in own folder and no nav associated with them
*/
