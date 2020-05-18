import React from "react";
import { Text, Image, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AmindiSpotlight from "./images/AmindiSpotlight.jpeg";
const ModelSpotlightScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <Image
        source={AmindiSpotlight}
        style={{ width: "70%", height: 350 }}></Image>
      <Text>
        {JSON.stringify(navigation.getParam("modelName", "Model Spotlight"))}
      </Text>
      <Text>Model Description</Text>
      <Text>
        Follow{" "}
        {JSON.stringify(navigation.getParam("modelName", "Model Spotlight"))}{" "}
        at:{" "}
      </Text>
      <Button title="Instagram" />
      <Button title="Twitter" />
    </ScrollView>
  );
};

export default ModelSpotlightScreen;
