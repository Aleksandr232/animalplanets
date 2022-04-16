import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Button, ScrollView } from 'react-native';
import { Video } from 'expo-av'
import * as FileSystem from 'expo-file-system';

const { width, height } = Dimensions.get('window');

export default function App() {
  const [videoUrl, setVideoUrl] = useState('https://player.vimeo.com/external/399635847.sd.mp4?s=ef0305947aff382d6e7fcd95ebdefd385a98f3a3&profile_id=139&oauth2_token_id=57447761')
  const [videoUrl1, setVideoUrl1] = useState('https://player.vimeo.com/external/516952161.sd.mp4?s=62f27c2c8683fb3ceee7f7c9c8a06f02a2af367c&profile_id=165&oauth2_token_id=57447761')
  const [videoUrl2, setVideoUrl2] = useState('https://player.vimeo.com/external/468451144.sd.mp4?s=1a225f021e1bb831f8973685579845d84fb2521c&profile_id=139&oauth2_token_id=57447761')
  const [videoUrl3, setVideoUrl3] = useState('https://player.vimeo.com/external/357094766.sd.mp4?s=da9dacc0fcf9e321a4ca087386ae9340b0fc02e7&profile_id=165&oauth2_token_id=57447761')

  return (
    <View style={styles.container}>
      <ScrollView>
     <Text></Text>
     <Video
        source={{ uri: videoUrl }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay={false}
        isLooping={false}
        useNativeControls
        style={styles.video}
      />
      <Text></Text>
     <Video
        source={{ uri: videoUrl1 }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay={false}
        isLooping={false}
        useNativeControls
        style={styles.video}
      />
      <Text></Text>
     <Video
        source={{ uri: videoUrl2 }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay={false}
        isLooping={false}
        useNativeControls
        style={styles.video}
      />
      <Text></Text>
     <Video
        source={{ uri: videoUrl3 }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay={false}
        isLooping={false}
        useNativeControls
        style={styles.video}
      />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  video: {
    width: width,
    height: height / 3
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});