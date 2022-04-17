import React,{useState} from 'react';
import { View, Text, StyleSheet, TextInput, Button} from "react-native";

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'animaliapi3.p.rapidapi.com',
		'X-RapidAPI-Key': '31b771a834msh2cfce94e71aff52p134a34jsn1fda1dead0a1'
	}
};

export default function Searchscreen(){
    const [searchanimal, setSearchAnimal] = useState('');
  const [all, setAll] = useState({});

  const search =  () => {
    return fetch(`https://animaliapi3.p.rapidapi.com/all/${searchanimal}`, options)
       .then(res => res.json())
       .then(result => {
        setAll(result);
        setSearchAnimal('');
         console.log(result);
       });
}
  return(
    <View style={styles.container}>
        <TextInput
              type="text"
              style={{ color: "black",
              top:10,
              width:'100%',
              height: 100,
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
              right:100,          
              }}
              placeholder="Найти животное..."
              onChangeText={setSearchAnimal}
              value={searchanimal}
              />
              <View style={styles.button}>
                  <Button  title='поиск' onPress={search}></Button>
                </View>
                <View style={styles.textview}>
                <Text style={styles.text}>Имя:{all?.animal?.name}</Text>     
                <Text style={styles.text1}>Королество:{all?.animal?.kingdom}</Text>
                <Text style={styles.text2}>Тип:{all?.animal?.phylum}</Text>
                <Text style={styles.text3}>Класс:{all?.animal?.classname}</Text>
                <Text style={styles.text4}>Отряд:{all?.animal?.order}</Text>
                <Text style={styles.text5}>Семейство:{all?.animal?.family}</Text>
            </View>
    </View>
)
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontSize: 20
    },
    button:{
        bottom: 60,
        width: 100,
        left: 150,
        color: "black",
        height: 100,
        fontSize: 20,
    },
    textview:{
        flex:1,
        textAlign: 'center',
        width: 300,
        
    },    
    text:{
        bottom: 99,
        right: 130,
        textAlign:'center',
        color:'black',
        fontSize: 30,
        
    },
    text1:{
        bottom:95,
        textAlign: 'center',
        color:'black',
        fontSize: 30,
        right: 50,
    },
    text2:{
        bottom:90,
        textAlign: 'center',
        color:'black',
        fontSize: 30,
        right: 108,
    },
    text3:{
        bottom:90,
        textAlign: 'center',
        color:'black',
        fontSize: 30,
        right: 80,
    },
    text4:{
        bottom:90,
        textAlign: 'center',
        color:'black',
        fontSize: 30,
        right: 85,
    },
    text5:{
        bottom:90,
        textAlign: 'center',
        color:'black',
        fontSize: 30,
        right: 59,
    },
})