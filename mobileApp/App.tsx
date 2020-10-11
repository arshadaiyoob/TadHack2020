
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";




import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "./src/modules/navigation/DrawerNavigator";




interface Props { }
interface State { }


export default class App extends React.Component<Props, State> {
  render() {
    return (
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
