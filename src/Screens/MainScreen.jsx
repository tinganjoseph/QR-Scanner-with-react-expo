import {
    View,
    Text,
    StatusBar,
    TouchableOpacity, SafeAreaView
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const MainScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView className="flex-1  bg-[#fefefe48]">
            <StatusBar hidden />

            <View className="bg-[#ffffff] h-full w-full mt-3 rounded-[50px] flex-1 items-center justify-center">
                <TouchableOpacity
                onPress={() => navigation.navigate("QR")}
                    className="flex-row items-center bg-[#760505] mt-2 p-2 justify-center w-36 h-12  rounded-2xl" >
                    <Text className="text-white text-center font-bold text-sm ml-1">
                        QR Scanner
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default MainScreen