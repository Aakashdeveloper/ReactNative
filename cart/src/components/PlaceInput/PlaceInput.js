import  React,{Component} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

class PlaceInput extends Component {
    state = {
        placeName: ''
      }

    placeNameChangeHandler = val => {
        this.setState({
          placeName: val
        });
      };
    
      placeSubmitHandler = () => {
        if(this.state.placeName.trim() === ""){
          return;
        }
        this.props.onPlaceAdded(this.state.placeName);
      };

    render(){
        return(
            <View style={styles.inputContainer}>
            <TextInput  value={this.state.placeName}  
                style={styles.placeInput}
                value={this.state.placeName}
                onChangeText={this.placeNameChangeHandler}/>
            <Button title="Search" styles={styles.placeButton}
                onPress={this.placeSubmitHandler}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputContainer:{
      flexDirection: "row",
      width:"100%",
      justifyContent:"space-between",
      alignItems:"center"
    },
    placeInput:{
      width:"70%",
      borderWidth:1,
      borderColor:"#000"
    },
    placeButton:{
      width:"30%"
    }
  });

export default PlaceInput;