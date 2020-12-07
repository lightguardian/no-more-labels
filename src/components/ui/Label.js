import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';


import {carries, palette} from "../../helpers/Global"

export default function Label(props){


    return (


        <LinearGradient colors={['#E0E0E0', '#F0F0F0','#F0F0F0','#F0F0F0', '#DCDCDC']}  style={styles.itemStyle}>
            <Text style={styles.legend}>{props.date}</Text>
            <Text style={styles.itemText}>{props.description.toUpperCase()}</Text>
            <Text style={styles.user}>{'-' + props.user}</Text>



        </LinearGradient>
    )

    
}

const styles = StyleSheet.create({

    

    legend: {
    textAlign: 'center',
    backgroundColor: 'transparent',
    alignSelf:'flex-start',    
    color: '#aaa',
    fontSize:12,
    marginLeft:5,
    
    fontFamily:'monospace'
    
    },
    user:{
    color: '#aaa',

    textAlign:'right',
    alignSelf:'flex-end',
    fontFamily:'monospace',
    marginRight:5,

    fontSize:12,


    },
    itemText:{

    color:'black',
    fontSize: 15,
    flexDirection: 'row',
    alignSelf:'center',
    textAlign:'center',
    fontWeight: 'bold',
    fontFamily:'serif',
    padding:10,
    },
    itemStyle: {
    width: '100%',
    height:'auto',
    borderColor: palette.YELLOW,
    borderRadius:20,
    marginVertical:8,
    padding:5

    },


})
