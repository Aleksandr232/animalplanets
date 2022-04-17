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
              placeholder="Search..."
              onChangeText={setSearchAnimal}
              value={searchanimal}
              />
              <View style={styles.button}>
                  <Button  title='поиск' onPress={search}></Button>
                </View>
                <View style={styles.textview}>
                <Text style={styles.text}>{all.name?.Object}</Text>     
                    
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
        left: 170,
        color: "black",
        height: 100,
        fontSize: 20,
    },
    textview:{
        flex: 1,
        textAlign: 'center',
        left:100
    },    
    text:{
       bottom:200,
        textAlign: 'center',
        color:'black', 
    }
})