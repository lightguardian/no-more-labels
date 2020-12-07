import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator,HeaderBackButton } from "@react-navigation/stack";
import ButtonIcon from "./components/actions/ButtonIcon"
import { StyleSheet } from "react-native";




import Home from "./pages/Home";
import Logs from "./pages/Logs";


import {palette} from "./helpers/Global";


const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator     
        screenOptions={{
          headerStyle: {
            backgroundColor: palette.PURPLE,
            height: 80 ,            
          },
          headerTintColor: palette.YELLOW,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: (props) => (
           <ButtonIcon{...props}
            styleButton = {styles.styleButton}
            styleIcon = {styles.iconStyle}
            iconName = "bars"
            action = {() => (alert("menu aberto!"))}
            iconColor = {palette.WHITE}
            iconSize = {30}
           >          
           </ButtonIcon>
          ),cardStyle :{
            background: 'blue'
          }
        }}
        >
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options= {{ title: 'noMoreLabels' }}
        />
        <Stack.Screen 
          name="Logs" 
          component={Logs} 
          options= {{ title: '=)' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  styleButton:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    flexDirection:'row',
    marginRight: 10,


  },
  iconStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  }

})