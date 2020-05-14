import React from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import { TouchableHighlight, ScrollView } from "react-native-gesture-handler";

const ContactUsScreen = ({ navigation }) => {
  const items = [
    { productName: "Photo A", code: "#1abc9c" },
    { productName: "Photo B", code: "#2ecc71" },
    { productName: "Photo C", code: "#3498db" },
    { productName: "Photo D", code: "#9b59b6" },
    { productName: "Photo E", code: "#34495e" },
    { productName: "Photo F", code: "#16a085" },
    { productName: "Photo G", code: "#27ae60" },
    { productName: "Photo H", code: "#2980b9" },
    { productName: "Photo I", code: "#8e44ad" },
  ];
  const [nameValue, onChangeNameText] = React.useState("Your Name");
  const [emailValue, onChangeEmailText] = React.useState("example@gmail.com");
  const [messageValue, onChangeMessageText] = React.useState(
    "Enter your message here"
  );

  return (
    <ScrollView>
      <View
        title
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Text>Connect with Us</Text>
        <FlatGrid
          itemDimension={90}
          items={items}
          style={styles.gridView}
          renderItem={({ item, index }) => (
            <TouchableHighlight
            //   onPress={() =>
            //     navigation.navigate("Product", {
            //       productName: item.productName,
            //       productColor: item.code,
            //     })
            //   }
            >
              <View
                style={[styles.itemContainer, { backgroundColor: item.code }]}>
                <Text style={styles.itemName}>{item.productName}</Text>
                <Text style={styles.itemCode}>{item.code}</Text>
              </View>
            </TouchableHighlight>
          )}
        />
        <Text>Message Us</Text>
        <Text> Name: </Text>
        <TextInput
          style={{ height: 40, width: 300, backgroundColor: "gray" }}
          onChangeText={(text) => onChangeNameText(text)}
          value={nameValue}
        />
        <Text> Email: </Text>
        <TextInput
          style={{ height: 40, width: 300, backgroundColor: "gray" }}
          onChangeText={(text) => onChangeEmailText(text)}
          value={emailValue}
        />
        <Text> Your Message: </Text>
        <TextInput
          style={{ height: 40, width: 300, backgroundColor: "gray" }}
          onChangeText={(text) => onChangeMessageText(text)}
          value={messageValue}
        />
        <Button title="Submit Message"></Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: "flex-end",
    borderRadius: 5,
    padding: 5,
    width: 90,
    height: 90,
  },
  itemName: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 12,
    color: "#fff",
  },
});

export default ContactUsScreen;
