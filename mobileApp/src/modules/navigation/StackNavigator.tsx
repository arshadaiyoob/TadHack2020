import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../dashboards/Home/Home";
import News from "../dashboards/News/News";
import Stats from "../dashboards/Stats/Stats";
import Map from "../dashboards/Map/Map";
import Landing from "../auth/Landing/Landing";
import PhoneNumber from "../auth/PhoneNumber/PhoneNumber";
import CodeVerification from "../auth/CodeVerfication/CodeVerfication";
import CreateAccount from "../auth/CreateAccount/CreateAccount";
const Stack = createStackNavigator();

const screenOptionStyle = {
  headerShown: false
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
      <Stack.Screen name="CodeVerification" component={CodeVerification} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="News" component={News} />
      <Stack.Screen name="Stats" component={Stats} />
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="Landing" component={Landing} />
    </Stack.Navigator>
  );
};
const LandingStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Landing" component={Landing} />
    </Stack.Navigator>
  );
};
const PhoneNumberStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
    </Stack.Navigator>
  );
};
const CodeVerificationStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="CodeVerification" component={CodeVerification} />
    </Stack.Navigator>
  );
};
const CreateAccountStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
    </Stack.Navigator>
  );
};
const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

const NewsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="News" component={News} />
    </Stack.Navigator>
  );
};

const StatsStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Stats" component={Stats} />
      </Stack.Navigator>
    );
  };

  const MapStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
    );
  };

export {LandingStackNavigator,
  PhoneNumberStackNavigator,
  CodeVerificationStackNavigator,
  CreateAccountStackNavigator,
  HomeStackNavigator,
  NewsStackNavigator,
  StatsStackNavigator,
  MapStackNavigator };
