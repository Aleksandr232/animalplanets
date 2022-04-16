import { View, Text, StyleSheet } from "react-native";


export default function Searchscreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>поиск</Text>
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
    }
})