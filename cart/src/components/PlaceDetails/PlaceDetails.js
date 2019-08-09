import React from 'react';
import { Modal, Views, Image, Text, Button} from 'react-native';

const PlaceDetail = props => {
    <Modal>
        <View>
            <Image source={props.selectedPlace.placeImage}/>
            <Text>{props.selectedPlace.placeName}</Text>
            <View>
                <Button/>
                <Button/>
            </View>
        </View>
    </Modal>
}

export default PlaceDetail;