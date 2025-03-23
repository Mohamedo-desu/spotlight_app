import { useAuth } from "@clerk/clerk-expo";
import { Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  const { signOut } = useAuth();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        onPress={() => signOut()}
        style={{ backgroundColor: "red", width: "90%" }}
      >
        <Text style={{ color: "white" }}>Signout</Text>
      </TouchableOpacity>
    </View>
  );
}
