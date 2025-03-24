import { COLORS } from "@/constants/theme";
import { styles } from "@/styles/create.styles";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ActivityIndicator, View } from "react-native";

const Loader = ({ size = "large" }: { size?: "small" | "large" }) => {
  return (
    <View
      style={[
        styles.container,
        { justifyContent: "center", alignItems: "center" },
      ]}
    >
      <ActivityIndicator size={size} color={COLORS.primary} />
      <StatusBar style="light" backgroundColor={COLORS.background} />
    </View>
  );
};

export default Loader;
