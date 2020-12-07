import React from 'react';
import { StyleSheet, Button, View, Modal, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 

import ButtonIcon from '../actions/ButtonIcon';

import {carries} from '../../helpers/Global';


export default function PersonModal(props) {

  const [modalVisible, setModalVisible] = React.useState(false)

  return (
    <View style = {{flex:1}}>
      <Modal style = {{flex:1, justifyContent:'space-evenly' }}
        visible={modalVisible}
        animationType="slide" onRequestClose={() => setModalVisible(false)}
      >
        {/* <View style={carries(props.modalStyle, styles.modal)}>
          {props.children}
          <ButtonIcon 
              action = {() => setModalVisible(false)} 
              styleButton = {styles.buttonIconStyle}
              iconColor = 'white'
              iconSize = {30}
              iconName = "times"
              gradientColors = {['crimson', 'crimson']}
          />
        </View> */}

        {props.children}
      </Modal>


      <TouchableOpacity   
        onPress={() => {
          setModalVisible(true)
        }}
      >
      <View 
        style={carries(props.styleButton,styles.default)}
      >
        <FontAwesome5 size = {carries(props.iconSize,20)} name= {props.iconName}  color={carries(props.iconColor,'black')}/>
        <Text style ={props.styleText}>
            {props.text}
        </Text>
      </View>
     </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    margin: 24,
    borderRadius: 8,
    backgroundColor: "pink",
    marginVertical: 64,
  }, 
  textButtonStyle: {
    fontSize: 20,
    color: 'white',
    margin: 10,
  }, 
  buttonIconStyle:{
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:'#1121FA',
    borderRadius: 10,
    width: 300,
    height: 50,
    padding: 5,
  },
});
