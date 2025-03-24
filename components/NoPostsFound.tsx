import { COLORS } from "@/constants/theme";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const NoPostsFound = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No posts yet</Text>
    </View>
  );
};

export default NoPostsFound;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: COLORS.primary,
  },
});
