import { Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FunScreen() {
    return (
        <SafeAreaView
            style={{ flex: 1, backgroundColor: "red" }}
        >

            <Image
                source={require('@/assets/images/react-logo.png')}
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "blue",
                    top: 0,
                    right: 0
                }}
            />

            <Image
                source={require('@/assets/images/react-logo.png')}
                style={{
                    position: "absolute",
                    width: 100,
                    height: 100,
                    backgroundColor: "green",
                    bottom: 50,
                    right: 20
                }}
            />



            <Text>Fun fun fun</Text>
            <Text>mera text</Text>
            <Text>mera text</Text>

        </SafeAreaView>
    )
}