import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'; 

import {carries} from '../../helpers/Global';


export default function ButtonIcon(props) {



  if(carries(props.visible,true)) 
  return (
      <TouchableOpacity  
        style={carries(props.styleButton,styles.default)} 
        onPress={() => {
          carries(props.action(), false)
        }}
      >

        <FontAwesome5 style = {carries(props.iconStyle,styles.defaultIconStyle)} size = {carries(props.iconSize,20)} name= {props.iconName}  color={carries(props.iconColor,'black')}/>
        <Text style ={props.onlyIcon ? styles.styleNoText : props.styleText}>
            {props.text}
        </Text>

    </TouchableOpacity>
  

  );
  return(null)

}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  default: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 0.5,
    height: 32,
    marginHorizontal: 4,
    alignItems: "center",
  },
  styleNoText:{
    height: 0,
    width:0,
    alignItems:'flex-end'
  },
  defaultIconStyle:{

  }

 
});
