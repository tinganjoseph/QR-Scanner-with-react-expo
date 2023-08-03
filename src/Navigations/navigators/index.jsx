import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TailwindProvider } from "tailwindcss-react-native";
import Stacks from './Stacks';

export default function AppNavigator() {

  return (
    <NavigationContainer>

        <TailwindProvider>
  
          <Stacks />
      
     
        </TailwindProvider>
      
    </NavigationContainer>
  );
}
