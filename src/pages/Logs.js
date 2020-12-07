import React from "react";
import { StyleSheet, Text, View, ImageBackground,Flatlist, TextInput, Animated } from "react-native";


import ButtonIcon from '../components/actions/ButtonIcon';
import Scanner from "../components/Scanner";

import {palette} from '../../src/helpers/Global';
import { TouchableOpacity } from "react-native-gesture-handler";

import Label from "../components/ui/Label"
import api from "../services/api/axios";

export default function Logs(props,{route, navigation}) {

  
  const [patrimony, setPatrimony] = React.useState("");
  const [labels, setLabels] = React.useState([]);
  const [description, setDescription] = React.useState("");

  const { id,local } = props.route.params;
  React.useEffect(()=>{
  },[])



  
  function setLabelState(state) {
    
  }

  const Item = ({ item }) => (
    <Label {...props}
      date = {item.date}
      user = {item.user}
      description = {item.description}     
      />
  );
  //BUSCA LABELS COM ESSE PATRIMONIO NO BANCO
  const allLabels = () => {
    //REQUISICAO FALHOU, MESMO EU COLOCANDO PARAMETROS
    //COM INSOMNIA DEU CERTO, ENTAO TENTEI ENVIAR UM JSON, MAS TAMBEM FALHOU
    //ESSA CONSULTA NAO REQUERIA AUTENTICACAO
    const json = JSON.stringify({ "id": 123456 });
    api.get('labels/computer', 
    {
      params: {
        "id": 123456
      }
    }
    )
    .then(function (response) {
        setLabelState(response.data);
    })
    .catch(function (error) {
      // handle error
      //console.log(error);
    })
    .then(function () {
      // always executed
    });
  }

  React.useEffect(()=>{
    setPatrimony(id)

    props.navigation.setOptions({ title: id })

    allLabels()

  },[])


  return (
    
    <View style={styles.main}>
   
      <View style={styles.navbar}>

      </View>
      <View style={styles.container}>
      
      {/* <Flatlist 
        extraData={labels}
        data={labels}
        renderItem={ ({item}) => <Item item ={item}/>}
        keyExtractor={item => item.id.toString()}
      />  */}

      <Label {...props}
      date = '19/01/2020'
      user = 'Aurelio'
      description = {"OK!"}
      />

      </View>

      <View style = {styles.terminal}>
      <Text style = {[styles.terminalSymbol]}>{">"}</Text>
      <TextInput style = {[styles.inputStyle,styles.terminalText]}
      
        onChangeText={(text) => {setDescription(text)
        }}
        
      />

      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  main:{
    flex: 1,
    flexDirection:'column'
  },
  image:{
    flex:1,
    resizeMode: "cover",
    justifyContent: "flex-end"
  },
  container: {
    flex: 1,
    paddingHorizontal:10,
    paddingVertical:5,
    flexDirection:'column',
    backgroundColor: palette.PURPLE,
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
  itemIconButton: {

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
    right:20,
    bottom: 20
  },

  
 
  textButtonStyle: {
    fontSize: 20,
    color: 'white',
    margin: 10,
  }, 
  modalStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "lightgrey",
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

  inputStyle:{
    backgroundColor:'blue',
    width: '100%',
    height:40,
   
    alignSelf:'flex-end',
   
    textAlign:'left',

  },
  terminal:{
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    width:'100%',
    backgroundColor:'#000000',
    paddingHorizontal:20,
    
  },

  terminalText:{
    fontSize:20,
    fontFamily:'monospace',
    color: palette.GREEN,
    backgroundColor:'transparent',
  },
  terminalSymbol:{
    width:30,
    fontSize:20,
    alignContent:'center',
    textAlign:'center',
    backgroundColor:'transparent',
    alignSelf:'center',
    color: palette.GREEN,
    fontFamily:'monospace',
    fontWeight:'bold',
  }
});
