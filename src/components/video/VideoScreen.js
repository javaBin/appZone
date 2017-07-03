import React from 'react';
import { View, StyleSheet, WebView, Dimensions } from 'react-native';

const vimeoUrl = 'https://vimeo.com/javazone';

class VideoScreen extends React.Component {
  constructor() {
    super();
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
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerBarRow: {
    flexDirection: 'row',
    padding: 8,
  },
  videoWeb: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  }
});

export default VideoScreen;
