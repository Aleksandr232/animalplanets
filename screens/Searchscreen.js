import React,{useState} from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList, Image} from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';





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
    /* const post = DATA.find(p=>p.id) */
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
              <FontAwesome5.Button
                    name='search'
                    backgroundColor="#3b5998"
                    onPress={search}
                >
                </FontAwesome5.Button>
                </View>
                <View style={styles.textview} /* data={DATA} */>
                <Text style={styles.text}>Имя:{all?.animal?.name}</Text>     
                <Text style={styles.text1}>Королество:{all?.animal?.kingdom}</Text>
                <Text style={styles.text2}>Тип:{all?.animal?.phylum}</Text>
                <Text style={styles.text3}>Класс:{all?.animal?.classname}</Text>
                <Text style={styles.text4}>Отряд:{all?.animal?.order}</Text>
                <Text style={styles.text5}>Семейство:{all?.animal?.family}</Text>
                <Text style={styles.text6}>Род:{all?.animal?.genus}</Text>
                <Text style={styles.text7}>Научное название:{all?.animal?.scientificname}</Text>
                
               
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
        width: 70,
        left:140,
        color: "black",
        height: 100,
        fontSize: 20,
    },
    textview:{
        flex:1,
        textAlign: 'center',
        width: 300,
        right:50,

        
    },    
    text:{
        bottom: 99,
        textAlign:'center',
        color:'black',
        fontSize: 20,
        
    },
    text1:{
        bottom:95,
        textAlign: 'center',
        color:'black',
        fontSize: 20,
    },
    text2:{
        bottom:90,
        textAlign: 'center',
        color:'black',
        fontSize: 20,
    },
    text3:{
        bottom:90,
        textAlign: 'center',
        color:'black',
        fontSize: 20,
    },
    text4:{
        bottom:90,
        textAlign: 'center',
        color:'black',
        fontSize: 20,
    },
    text5:{
        bottom:90,
        textAlign: 'center',
        color:'black',
        fontSize: 20,
    },
    text6:{
        bottom:90,
        textAlign: 'center',
        color:'black',
        fontSize: 20,
    },
    text7:{
        bottom:90,
        textAlign: 'center',
        color:'black',
        fontSize: 20,
    },
    flat:{
        flex:1,
        top: 20
    },
    image:{
        flex: 1,
        width: 400,
        bottom: 20,
    }
})