import React from "react";
import { Text, View, Image } from "react-native";
import HomePageCarousel1 from "/Users/mayapeglergordon/Pachamami/Pachamami/src/images/HomePageCarousel1.jpeg";

const AboutScreen = ({ navigation }) => {
  return (
    <View title style={{ flex: 1, alignItems: "center" }}>
      <Image
        source={HomePageCarousel1}
        style={{ width: 380, height: 250 }}></Image>
      <Text>Pachamami's Mission</Text>
      <Text>About the Founder</Text>
    </View>
  );
};

export default AboutScreen;
