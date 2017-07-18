import React from 'react'
import { StyleSheet, View } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

export default class MapScreen extends React.Component {
<<<<<<< aceee3b55e2e5388c5edd555226796ccff21ad2c
<<<<<<< ca9981bd380f0eddbbe779b61fc459b7dbd2d56a
=======
=======
>>>>>>> merged
  constructor() {
    super()
  }

  componentDidMount() {
    
  }

<<<<<<< aceee3b55e2e5388c5edd555226796ccff21ad2c
>>>>>>> chore: fix lint warning
=======
>>>>>>> merged
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
    )
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
})