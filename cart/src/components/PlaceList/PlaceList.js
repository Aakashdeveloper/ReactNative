import React from 'react';
import {StyleSheet, View, ScrollView, FlatList,Image} from 'react-native';

import ListItem from '../Listitem/Listitem'

const PlaceList = props =>{
    const placeOutput =  props.places.map((place,i) => (
        <ListItem 
            key={i} 
            placeName={place.name}
            placeImage={place.image}
            onItemPressed={() => alert('pressed>. '+i)}/>
      ))
    return(
        <ScrollView style={styles.listContainer}>
            {placeOutput}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    listContainer:{
      width:"100%"
    }
  });

export default PlaceList;