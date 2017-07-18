import React from 'react'
import { View, StyleSheet, WebView, Dimensions } from 'react-native'

const vimeoUrl = 'https://vimeo.com/javazone'

export default class VideoScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      status: 'No Page Loaded',
      backButtonEnabled: false,
      forwardButtonEnabled: false,
      loading: true
    }
  }


  render() {
    return (
      <View style={styles.container}>
<<<<<<< aceee3b55e2e5388c5edd555226796ccff21ad2c
<<<<<<< ca9981bd380f0eddbbe779b61fc459b7dbd2d56a
        <WebView
          source={{ uri: vimeoUrl }}
          style={styles.videoWeb}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          decelerationRate="normal"
          startInLoadingState={true}
          scalesPageToFit={true} />
      </View>
    );
=======
=======
>>>>>>> merged
      <WebView
        source={{ uri: vimeoUrl }}
        style={styles.videoWeb}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        decelerationRate="normal"
        startInLoadingState={true}
        scalesPageToFit={true} />
        </View>
    )
<<<<<<< aceee3b55e2e5388c5edd555226796ccff21ad2c
>>>>>>> chore: fix lint warning
=======
>>>>>>> merged
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerBarRow: {
    flexDirection:'row',
    padding: 8,
  },
  videoWeb: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  }
<<<<<<< aceee3b55e2e5388c5edd555226796ccff21ad2c
<<<<<<< ca9981bd380f0eddbbe779b61fc459b7dbd2d56a
});

export default VideoScreen;
=======
})
>>>>>>> chore: fix lint warning
=======
})
>>>>>>> merged
