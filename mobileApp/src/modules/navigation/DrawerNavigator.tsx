import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { NewsStackNavigator,
  StatsStackNavigator,
  MapStackNavigator,
  LandingStackNavigator,
  PhoneNumberStackNavigator,
  CodeVerificationStackNavigator,
  CreateAccountStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Landing" component={LandingStackNavigator} />
      <Drawer.Screen name="PhoneNumber" component={PhoneNumberStackNavigator} />
      <Drawer.Screen name="CodeVerification" component={CodeVerificationStackNavigator} />
      <Drawer.Screen name="CreateAccount" component={CreateAccountStackNavigator} />
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="News" component={NewsStackNavigator} />
      <Drawer.Screen name="Stats" component={StatsStackNavigator} />
      <Drawer.Screen name="Map" component={MapStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;