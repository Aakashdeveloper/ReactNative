
import React, {Component} from 'react';
import {Button, StyleSheet, Text,  TextInput, View} from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import starBuckimg from './src/assets/Starbucks_Cold.jpg';
import PlaceDetail from './src/components/PlaceDetails/PlaceDetails';

export default class App extends Component{
  state = {
    places:[],
    selectedPlace:null
  }

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return{
        places: prevState.places.concat({
            key: Math.random(),
            name:placeName,
            image:starBuckimg
          })
      }
    })
  }

  placeSelectedHandler = key => {
    this.setState(prevState => {
      return{
        selectedPlace: prevState.places.find((place) => {
          return place.key === key;
        })
      };
    });
  }

  render() {
    
    return (
      <View style={styles.container}>
        <Text style={styles.mainHeading}>Shopping Cart</Text>
        <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
        <PlaceList places={this.state.places}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:50,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    justifyContent:'flex-start'
  },
  mainHeading:{
    fontWeight: "bold",
    color: "#6495ED",
    fontSize:30
  },
  textColor:{
    color:"#191970"
  }
});
