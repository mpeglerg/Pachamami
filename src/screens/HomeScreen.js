import React from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import Carousel from "react-native-carousel-view";
//import url causing issues with ./src/etc... In process of debugging
import HomePageCarousel1 from "/Users/mayapeglergordon/Pachamami/Pachamami/src/images/HomePageCarousel1.jpeg";
import HomePageCarousel2 from "/Users/mayapeglergordon/Pachamami/Pachamami/src/images/HomePageCarousel2.jpeg";
const HomeScreen = ({ navigation }) => {
  console.log("Navigation: ", navigation);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Welcome to Pachamami</Text>
      <Carousel
        width={375}
        height={300}
        delay={2000}
        indicatorAtBottom={true}
        indicatorSize={20}
        indicatorText="✽"
        indicatorColor="red">
        <View style={styles.contentContainer}>
          <Image
            source={HomePageCarousel1}
            style={{ width: 380, height: 250 }}></Image>
          <Text>Page 1</Text>
        </View>
        <View style={styles.contentContainer}>
          <Image
            source={HomePageCarousel2}
            style={{ width: 380, height: 250 }}></Image>
          <Text>Page 2</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text>Page 3</Text>
        </View>
      </Carousel>
      <Button
        title="Product"
        onPress={() => navigation.navigate("Product")}></Button>
      <Button
        title="Shop Categories"
        onPress={() => navigation.navigate("Category")}></Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
/*React Native Notes:
    string param aligns with name from App.js ("Home") for this page
    navigation.navigate("NameOfScreen") used to move between pages
    Parts of screens: components, in own folder and no nav associated with them
*/
