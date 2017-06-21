import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default class MapScreen extends React.Component {
  constructor() {
    super();

  }

  componentDidMount() {
    
  }

  render() {
    return (
      <View style ={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          <MapView.GroundOverlay imagePath="Hello" />
        </MapView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});