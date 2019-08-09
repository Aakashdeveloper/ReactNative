import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const ListItem = (props)=> {
    return(
        <TouchableOpacity onPress={props.onItemPressed}>
            <View style={styles.listItem} >
                <Image source={props.placeImage} style={styles.placeImage}/>
                <Text>{props.placeName}</Text>
                <Text>{'\n'}$20</Text>
            </View>  
        </TouchableOpacity>   
    )    
   
}

const styles = StyleSheet.create({
    listItem:{
        width:"100%",
        padding:10,
        marginTop:2,
        color:'#191970',
        backgroundColor: '#eee',
        flexDirection:"row",
        alignItems:"center"
    },
    placeImage:{
        marginRight:8,
        width:100,
        height:100
    }
})

export default ListItem;