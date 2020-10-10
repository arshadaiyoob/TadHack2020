import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CreateAccount from './src/modules/auth/CreateAccount/CreateAccount';
import Landing from './src/modules/auth/Landing/Landing'
import PhoneNumber from './src/modules/auth/PhoneNumber/PhoneNumber';
import CountryTextField from './src/component/CountryTextField/CountryTextField'
import Password from './src/modules/auth/Password/Password';
import CodeVerification from './src/modules/auth/CodeVerfication/CodeVerfication'
import Settings from './src/modules/settings/settings';
import ViewAccess from './src/modules/access/ViewAccess/ViewAccess';
import GrantAccess from './src/modules/access/GrantAccess/GrantAccess';
import AccessList from './src/modules/access/AccessList/AccessList';
import GettingStarted from './src/modules/access/GettingStarted/GettingStarted';
import Dashboard from './src/modules/dashboards/Dashboard';
import BottomNavigator from './src/modules/dashboards/BottomNavigator';
import Map from './src/modules/dashboards/Map';
import Home from './src/modules/dashboards/Home/Home';
import News from './src/modules/dashboards/News/News';
import Stats from './src/modules/dashboards/Stats/Stats';


interface Props { }
interface State { }

export default class App extends React.Component<Props, State>{
  render() {
    return (
      <View>
      <Home/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
