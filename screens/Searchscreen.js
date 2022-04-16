import React,{useState} from 'react';
import { View, Text, StyleSheet, TextInput, Button} from "react-native";


export default function Searchscreen(){
    const [searchanimal, setSearchAnimal] = useState('');
  const [species, setSpecies] = useState({});

  const search =  () => {
    return fetch('http://bloowatch.org/developers/json/species')
       .then(res => res.json())
       .then(result => {
        setSpecies(result);
        setSearchAnimal('');
         console.log(result);
       });
}
  return(
    <View style={styles.container}>
        <TextInput
              type="text"
              style={{ color: "black",
              top: 10,
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
                <Text style={styles.text}>{species.name}</Text>     
                    
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
        textAlign: 'center',
        width: 300,
        left: 50
    },    
})