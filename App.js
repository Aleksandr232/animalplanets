import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { BottomNavigation, Text } from 'react-native-paper';
import Photoscreen from './screens/Photoscreen';
import Videoscreen from './screens/Videoscreen';
import Searchscreen from './screens/Searchscreen';




export default function App() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'photo', title: 'Фото животных', icon: 'image-multiple' },
    { key: 'video', title: 'Видео животных', icon: 'file-video-outline' },
    { key: 'search', title: 'Поиск', icon: 'magnify' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    photo: Photoscreen,
    video: Videoscreen,
    search: Searchscreen
    
  });
  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
  
}


