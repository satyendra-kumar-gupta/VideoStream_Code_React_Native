import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Video } from 'expo-av';
import { Colors } from 'react-native/Libraries/NewAppScreen';



export default function App() {
  return (

    <View style={styles.container}>
      <Text style={{ color: 'green',fontWeight: 'bold', marginVertical:20 }}>Demo of Video Streaming</Text>
      
      <ScrollView>
      <Video
        source={{ uri: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8' }}
        rate={1.0}
        volume={1.0}
        // isMuted={true}
        resizeMode="cover"
        // shouldPlay
         isLooping
        useNativeControls={true}
        style={{ width: 300, height: 300, marginVertical:20 }}
      />
       <Video 
        source={{ uri: 'https://content.jwplatform.com/manifests/yp34SRmf.m3u8' }}
        rate={1.0}
        volume={1.0}
        // isMuted={true}
        resizeMode="cover"
        // shouldPlay
         isLooping
        useNativeControls={true}
        style={{ width: 300, height: 300, marginVertical:20 }}
      />

      <Video
        source={{ uri: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8' }}
        rate={1.0}
        volume={1.0}
        // isMuted={true}
        resizeMode="cover"
        // shouldPlay
         isLooping
        useNativeControls={true}
        style={{ width: 300, height: 300 , marginVertical:20}}
      />

</ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:30
  },
});

