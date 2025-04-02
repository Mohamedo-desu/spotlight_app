import { COLORS } from "@/constants/theme";
import React from "react";
import { Text, View } from "react-native";

const NoBookmarksFound = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.background,
      }}
    >
      <Text style={{ color: COLORS.primary, fontSize: 22 }}>
        No bookmarked posts yet
      </Text>
    </View>
  );
};

export default NoBookmarksFound;
