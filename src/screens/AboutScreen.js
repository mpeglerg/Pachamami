import React from "react";
import { Text, View, Image } from "react-native";
import HomePageCarousel1 from "./images/HomePageCarousel1.jpeg";

const AboutScreen = ({ navigation }) => {
  return (
    <View title style={{ flex: 1, alignItems: "center" }}>
      <Image
        source={HomePageCarousel1}
        style={{ width: 380, height: 250 }}></Image>
      <Text>Pachamami's Mission</Text>
      <Text>
        Pachamami is directly inspired by the name Pachamama. The name Pachamama
        is translated into English as Mother Earth since pacha is a word in both
        Quechua and Aymara that means earth, cosmos, universe, time, and space
        in English and mama means "mother." La Pachamama is the highest divinity
        of the Andean indigenous people since she is concerned with fertility,
        plenty, the feminine, generosity and ripening crops, besides providing
        protection. Pachamami is devoted to honoring the earth and committed to
        sustainability. As a slow fashion lifestyle brand, we upcycle existing
        textile materials such as vintage clothing, fabric scraps, and discarded
        clothing donations into a new design. We rework and repurpose unwanted
        textiles to extend its useful life especially as global clothing waste
        becomes a greater pollution crisis. Besides the earth, ancestral
        histories also honor textiles and its craftsmanship. Textiles were
        culturally valued as art which told stories and revealed one’s
        status.Pachamami represents a modern interpretation of embroidery
        craftsmanship.
      </Text>
      <Text>About the Founder</Text>
      <Text>
        Pachamami is founded and currently operated solely by Paloma Jacome,
        born and raised in Venice Beach, California she is a self taught hand
        embroidery artist and upcycler. To honor the craftsmanship of
        embroidery, Paloma hand embroiders most of Pachamami’s pieces. In
        addition to creating Pachamami products, Paloma is the creative director
        for Pachamami’s content.
      </Text>
    </View>
  );
};

export default AboutScreen;
