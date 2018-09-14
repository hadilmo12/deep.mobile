import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Dimensions, View} from 'react-native';
import Camera from 'react-native-camera';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Camera ref={cam => { this.camera = cam; }} style={styles.preview} aspect={Camera.constants.Aspect.fill}> 
        <Text style={styles.capture} onPress={this.takePicture.bind(this)}> [CAPTURE] </Text>
      </Camera>
    );
  }

  takePicture() { this.camera.capture().then((data) => console.log(data)).catch(err => console.error(err)); }
}

const styles = StyleSheet.create({
  preview: { 
    flex: 1, 
    justifyContent: 'flex-end', 
    alignItems: 'center', 
    height: Dimensions.get('window').height, 
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0, 
    backgroundColor: '#ffffff', 
    borderRadius: 5, 
    color: '#000', 
    padding: 10, 
    margin: 40
  }
});
