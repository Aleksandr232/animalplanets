import * as ScreenOrientation from 'expo-screen-orientation'
import { Dimensions, ScrollView, StyleSheet, Text, ImageBackground } from 'react-native'
import { Video } from 'expo-av'
import { setStatusBarHidden } from 'expo-status-bar'
import React, { useRef, useState } from 'react'
import VideoPlayer from 'expo-video-player'

const App = () => {
  const [inFullscreen, setInFullsreen] = useState(false)
  const [inFullscreen2, setInFullsreen2] = useState(false)
  const refVideo = useRef(null)
  const refVideo2 = useRef(null)
  const refScrollView = useRef(null)
  

  return (
    <ScrollView
      scrollEnabled={!inFullscreen2}
      ref={refScrollView}
      onContentSizeChange={() => {
        if (inFullscreen2) {
          refScrollView.current.scrollToEnd({ animated: true })
        }
      }}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
    
      {/* <Text style={styles.text}>Fullscren</Text> */}
      <VideoPlayer
        videoProps={{
          shouldPlay: false,
          resizeMode: Video.RESIZE_MODE_CONTAIN,
          source: {
            uri: 'https://player.vimeo.com/external/154778744.sd.mp4?s=47011bbd0f9d24fc90496368da5d716164a1ec2f&profile_id=112',
          },
          ref: refVideo2,
        }}
        fullscreen={{
          inFullscreen: inFullscreen2,
          enterFullscreen: async () => {
            setStatusBarHidden(true, 'fade')
            setInFullsreen2(!inFullscreen2)
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT)
            refVideo2.current.setStatusAsync({
              shouldPlay: true,
            })
          },
          exitFullscreen: async () => {
            setStatusBarHidden(false, 'fade')
            setInFullsreen2(!inFullscreen2)
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT)
          },
        }}
        style={{
          height: inFullscreen2 ? Dimensions.get('window').width : 160,
          width: inFullscreen2 ? Dimensions.get('window').height : 420,
        }}
      />
      <Text style={styles.text}></Text>
      <VideoPlayer
        videoProps={{
          shouldPlay: false,
          resizeMode: Video.RESIZE_MODE_CONTAIN,
          source: {
            uri: 'https://player.vimeo.com/external/465226691.sd.mp4?s=c01f11a6e2f6b9c5515bcf82ff843a9aea6a091c&profile_id=164',
          },
          ref: refVideo2,
        }}
        fullscreen={{
          inFullscreen: inFullscreen2,
          enterFullscreen: async () => {
            setStatusBarHidden(true, 'fade')
            setInFullsreen2(!inFullscreen2)
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT)
            refVideo2.current.setStatusAsync({
              shouldPlay: true,
            })
          },
          exitFullscreen: async () => {
            setStatusBarHidden(false, 'fade')
            setInFullsreen2(!inFullscreen2)
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT)
          },
        }}
        style={{
          height: inFullscreen2 ? Dimensions.get('window').width : 160,
          width: inFullscreen2 ? Dimensions.get('window').height : 420,
        }}
      />
      <Text style={styles.text}></Text>
      <VideoPlayer
        videoProps={{
          shouldPlay: false,
          resizeMode: Video.RESIZE_MODE_CONTAIN,
          source: {
            uri: 'https://player.vimeo.com/external/373138314.sd.mp4?s=d4a76c19896b3a27e8499877867b2f1d449c4b8c&profile_id=164',
          },
          ref: refVideo2,
        }}
        fullscreen={{
          inFullscreen: inFullscreen2,
          enterFullscreen: async () => {
            setStatusBarHidden(true, 'fade')
            setInFullsreen2(!inFullscreen2)
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT)
            refVideo2.current.setStatusAsync({
              shouldPlay: true,
            })
          },
          exitFullscreen: async () => {
            setStatusBarHidden(false, 'fade')
            setInFullsreen2(!inFullscreen2)
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT)
          },
        }}
        style={{
          height: inFullscreen2 ? Dimensions.get('window').width : 160,
          width: inFullscreen2 ? Dimensions.get('window').height : 420,
        }}
      />
      <Text style={styles.text}></Text>
      <VideoPlayer
        videoProps={{
          shouldPlay: false,
          resizeMode: Video.RESIZE_MODE_CONTAIN,
          source: {
            uri: 'https://player.vimeo.com/external/357512333.sd.mp4?s=449519c88e84ddea0b70ad2f253a1cf7fb829bae&profile_id=164',
          },
          ref: refVideo2,
        }}
        fullscreen={{
          inFullscreen: inFullscreen2,
          enterFullscreen: async () => {
            setStatusBarHidden(true, 'fade')
            setInFullsreen2(!inFullscreen2)
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT)
            refVideo2.current.setStatusAsync({
              shouldPlay: true,
            })
          },
          exitFullscreen: async () => {
            setStatusBarHidden(false, 'fade')
            setInFullsreen2(!inFullscreen2)
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT)
          },
        }}
        style={{
          height: inFullscreen2 ? Dimensions.get('window').width : 160,
          width: inFullscreen2 ? Dimensions.get('window').height : 420,
        }}
      />
      <Text style={styles.text}></Text>
      <VideoPlayer
        videoProps={{
          shouldPlay: false,
          resizeMode: Video.RESIZE_MODE_CONTAIN,
          source: {
            uri: 'https://player.vimeo.com/external/174173914.sd.mp4?s=97c086934c0f49e35bc74145bf03f70dd1c96801&profile_id=164n',
          },
          ref: refVideo2,
        }}
        fullscreen={{
          inFullscree: inFullscreen2,
          enterFullscreen: async () => {
            setStatusBarHidden(true, 'fade')
            setInFullsreen2(!inFullscreen2)
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT)
            refVideo2.current.setStatusAsync({
              shouldPlay: true,
            })
          },
          exitFullscreen: async () => {
            setStatusBarHidden(false, 'fade')
            setInFullsreen2(!inFullscreen2)
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT)
          },
        }}
        style={{
          height: inFullscreen2 ? Dimensions.get('window').width : 160,
          width: inFullscreen2 ? Dimensions.get('window').height : 420,
        }}
      />
      <Text style={styles.text}></Text>
      <VideoPlayer
        videoProps={{
          shouldPlay: false,
          resizeMode: Video.RESIZE_MODE_CONTAIN,
          source: {
            uri: 'https://media.istockphoto.com/videos/school-of-fishsharks-swim-in-a-circle-video-id1255754954',
          },
          ref: refVideo2,
        }}
        fullscreen={{
          inFullscreen: inFullscreen2,
          enterFullscreen: async () => {
            setStatusBarHidden(true, 'fade')
            setInFullsreen2(!inFullscreen2)
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT)
            refVideo2.current.setStatusAsync({
              shouldPlay: true,
            })
          },
          exitFullscreen: async () => {
            setStatusBarHidden(false, 'fade')
            setInFullsreen2(!inFullscreen2)
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT)
          },
        }}
        style={{
          height: inFullscreen2 ? Dimensions.get('window').width : 160,
          width: inFullscreen2 ? Dimensions.get('window').height : 420,
        }}
      />
      
    </ScrollView>
    
)
}
export default App

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  text: {
    marginTop: 3,
    marginBottom: 1,
  },
  
})

