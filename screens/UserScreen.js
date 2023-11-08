import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

const UserScreen = ({ navigation }) => {
  const openDrawerhandler = () => {
    navigation.toggleDrawer();
  };
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.highlight}>UserScreen</Text>
      <Button title="Open the drawer" onPress={openDrawerhandler} />
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  highlight: {
    fontWeight: "bold",
    color: "#eb1064",
  },
});
