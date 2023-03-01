import { View, Text, Button } from "react-native";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        rowGap: 10,
      }}
    >
      <Text>Index page</Text>

      <Link href="home">Home</Link>
    </View>
  );
}
