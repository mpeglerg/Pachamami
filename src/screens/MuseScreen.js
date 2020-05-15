import React from "react";
import ModelGrid from "./components/ModelGrid";
import { ScrollView } from "react-native-gesture-handler";

const MuseScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <ModelGrid navigation={navigation} />
    </ScrollView>
  );
};

export default MuseScreen;
