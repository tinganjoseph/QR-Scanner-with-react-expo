import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {MainScreen,QRScreen
} from "../../Screens";
const Stack = createStackNavigator();
const Stacks = () => {
  const [initialRouteName] = useState("Home");

  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
      <Stack.Screen
        name="Home"
        component={MainScreen}
        options={{ headerShown: false }}
      />

         <Stack.Screen
        name="QR"
        component={QRScreen}
        options={{
          headerShown: false,
        }}
      />

     
    </Stack.Navigator>
  );
};

export default Stacks;
