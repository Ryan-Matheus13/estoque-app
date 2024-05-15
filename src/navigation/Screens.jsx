import React from "react";
import { Text, View } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { Home, Favorites } from "../pages";

const Stack = createStackNavigator();

export default function Telas(props: any) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: ({ current, next, layouts }) => {
          return {
            cardStyle: {
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),
                },
              ],
            },
          };
        },
      }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Favorites" component={Favorites} />
    </Stack.Navigator>
  );
}
