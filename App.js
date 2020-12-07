import { StatusBar } from "expo-status-bar";
import React from "react";
import {SafeAreaView} from 'react-native';

import Routes from "./src/routes";



export default function App() {
  return (
    <SafeAreaView style = {{flex:1}}> 
      <StatusBar style="auto" />
      <Routes />
    </SafeAreaView>
  );
}