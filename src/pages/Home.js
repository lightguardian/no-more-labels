import React from "react";
import { StyleSheet, Text, View, Image, Linking, FlatList, Button, Modal, Header } from "react-native";


import ButtonIcon from '../components/actions/ButtonIcon';
import Scanner from "../components/Scanner";
 

import {palette, PATTERN} from '../../src/helpers/Global';
import { TouchableOpacity } from "react-native-gesture-handler";

import api from "../services/api/axios";

export default function Home(props,{navigation}) {
  function goToLogs(item) {


  
    props.navigation.navigate('Logs', {...props,
      id:item.id, local:item.local
    }); 
  }

  const [computers, setComputers] = React.useState([]);
  const [type, setType] = React.useState("");
  const [item, setItem] = React.useState({});
  const [scanned, setScanned] = React.useState("");
  const [modalVisible, setModalVisible] = React.useState(false)
  const onCodeScanned = (type, data,) => {
    setType(type);
    setScanned(data);
    setModalVisible(false);
    if (data.match(PATTERN.PATRIMONY) != null) {
      //simulando o envio de um pc
      goToLogs([{"id":123456,"local":"Teste","statusId":4}])
    } 

    
  };

 

  function setComputerState(state) {
    setComputers(state);
  }


  const allComputers = () => {
    api.get('computers')
    .then(function (response) {
        setComputerState(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }

  const createComputer = () => {
    api.post('computers',
  )
    .then(function (response) {
        setComputerState(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }
  

  React.useEffect(() => {
    allComputers();
  },[]);

  React.useEffect(() => {
  
  },[scanned]);


  function computerColorStatus(status) {
    switch (status) {
      case 1:
        return '#4BB543'
      case 2:
        return pallete.YELLOW
      case 3:
        return pallete.PURPLE
      case 4:
        return 'gray'
      return "?";
    }
  }
  
  
  const Item = ({ item }) => (
    <TouchableOpacity {...props}
    onPress = { () => {
      goToLogs(item)
    }}
    >
    <View style={styles.itemStyle}>
      <Text style={styles.legend}>{item.id}</Text>
      <View style={styles.itemContent}>
      <Text style={styles.itemText}>{item.local}</Text>
        <ButtonIcon
          styleButton = {styles.itemButton}
          styleIcon = {styles.itemIconButton}
          iconName = "check"
          action = {() => {   
            alert("UPDATE STATUS COMPUTER")
          }}
          iconColor = {palette.YELLOW}
          iconSize = {25}
        ></ButtonIcon>
      </View>
  
    </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.main}>
      <View style={styles.navbar}>

        <ButtonIcon {...props}
          styleButton = {[styles.navbarButton, ]}
          styleText = {styles.navButtonText}
          text = 'PENDENTES'
          action = {() => (alert('PRONTO'))}
          iconSize = {25}
        ></ButtonIcon>
          <ButtonIcon {...props}
          styleButton = {[styles.navbarButton, ]}
          styleText = {styles.navButtonText}
          text = 'PRONTOS'
          action = {() => (alert('PRONTO'))}
          iconSize = {25}
        ></ButtonIcon>
          <ButtonIcon {...props}
          styleButton = {[styles.navbarButton, ]}
          styleText = {styles.navButtonText}
          text = 'TODOS'
          action = {() => (alert('Todos'))}
          iconSize = {25}
        ></ButtonIcon>
        
      </View>
      <View style={styles.container}>


      <FlatList style={styles.flatlist}
        extraData={computers}
        data={computers}
        renderItem={ ({item}) => <Item item ={item}/>}
        keyExtractor={item => item.id.toString()}
      />

      <Modal 
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modal}>
          <Scanner style={styles.scanModal} onCodeScanned={onCodeScanned} />
    
          <ButtonIcon {...props}
            styleButton = {styles.scanModalButtonStyle}
            styleIcon = {styles.iconModalButtonStyle}
            iconName = "times"
            action = {() => setModalVisible(false)}
            iconColor = {palette.WHITE}
            iconSize = {30}
      
      ></ButtonIcon>
        </View>
      </Modal>
      
     
        
      <ButtonIcon {...props}
            styleButton = {styles.scanButtonStyle}
            styleIcon = {styles.iconStyle}
            iconName = "qrcode"
            action = {() => setModalVisible(true)}
            iconColor = {palette.WHITE}
            iconSize = {30}
      
      >

      </ButtonIcon>
      
        </View>
    </View>
  );

}

const styles = StyleSheet.create({
  main:{
    flex: 1,

  },
  container: {
    flex: 1,
    paddingHorizontal:10,
    paddingVertical:5,
    flexDirection:'column',
    backgroundColor: palette.WHITE,
  },
  navbar:{
    backgroundColor: palette.LPURPLE,
    flexDirection:'row',
    width:'100%',
    height: 30,
    justifyContent:'center',
    alignContent:'center'
  },

  navButtonText: {
    textAlign:'center',
    color: 'white',
    fontSize:16,
    fontWeight:'bold',
  },
  navbarButton: { 
    flex: 1,
    flexDirection: "row",
    justifyContent:'center',
    color: 'white',
  },
  searchButton: {
    flexDirection:'row',
    alignSelf:'flex-end',
    backgroundColor:'blue',
    
  },
  searchIcon: {
    textAlign:'center',
  },
 
  buttonModalStyle:{
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:palette.GREEN,
    borderRadius: 100,
    width: 50,
    height: 50,
    padding: 1,
  },
  modalDetails:{
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  textModalStyle:{
 
  },

  itemButton: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor:'transparent',
      borderWidth: 4,
      borderColor:palette.YELLOW ,
      borderRadius: 100,
      width: 35,
      height: 65,
  },
  modalButton: {
    backgroundColor:'blue'
  },
  
  legend: {
    textAlign: 'center',
    backgroundColor: palette.WHITE,
    zIndex: 50,
    padding: 5,
    width:70,
    position:"relative",
    marginTop: -15,
    marginLeft: 15,
    color: palette.YELLOW,
    fontSize:15,
    fontWeight:'bold',
    
  },
  itemText:{
    flex:1,
    color:palette.YELLOW,
    fontSize: 15,
    
    flexDirection: 'row',
    alignSelf:'center',
    textAlign:'center',
    fontWeight: 'bold',

  },
  scanButtonStyle:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:palette.GREEN,
    borderRadius: 100,
    width: 60,
    height: 60,
   
    position: 'absolute',
    left:20,
    bottom: 20
  },
  scanModalButtonStyle:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:palette.RED,
    borderRadius: 100,
    width: 60,
    height: 60,
   
   
   margin:20,
  },

  itemStyle: {
    width: '100%',
    height:80,
    borderWidth: 4,
    borderColor: palette.YELLOW,
    borderRadius:20,
    marginVertical:8,

  },
  itemContent: {
    flex:1,
    flexDirection:'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginBottom: 15,
    padding: 10,
  },
  textButtonStyle: {
    fontSize: 20,
    color: 'white',
    margin: 10,
  }, 
  modal: {
    flex: 1,
    padding:10,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "lightgrey",
    backgroundColor:palette.YELLOW,
  },
  scanModal:{
    borderRadius: 20,
  },
  modalText:{
    fontSize: 20,
    color: 'black',
    margin: 10,
    

  },
  modalTitle:{
    zIndex: 1,
    fontSize: 40,
    color: 'black',
    margin: 10,
    fontWeight: 'bold',

  },
  modalTextItens:{
    justifyContent:'flex-start',
    fontSize: 20,
    color: 'black',
    fontStyle: 'italic',
    paddingHorizontal:40,
    textAlign:'center',
    

  },
  modalItens:{
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems:'flex-start',
    padding: 20,
    paddingRight: 200,
    
  },
  imageLogo:{
    width: '100%',
    height: '60%',
    resizeMode: 'stretch',
    paddingBottom: 10,
  },
  imageModal:{
    justifyContent:'center',
    width: 300,
    height: 180,
    resizeMode: 'stretch',
  },
  
  

  
});
