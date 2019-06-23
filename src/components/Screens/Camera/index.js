import React, { Component, Fragment } from 'react';
import { StyleSheet, View, Text, Image,Alert, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { RNCamera } from 'react-native-camera';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
export default class Camera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: '#2756A9',
      path: null,
      imagePath: null,
      isLoading: false,
      flash: false
    }
  }
  static navigationOptions = {
    header: null,
    gesturesEnabled: false,
    disabledBackGesture: false
  }
  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      // console.log(data.uri);
      this.props.navigation.navigate('Cloud');
    }
  };
  componentDidMount() {
    console.log(height);
  }
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.front}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.log(barcodes);
          }}
        />
        <View style={styles.maskOutter}>
          <Icon name="menuunfold" size={45} />
        </View>
        <View style={{
          margin: 5,
          position: "absolute",
          height: 50,
          // backgroundColor: '#FF9800',
          // alignItems: 'flex-end',
          // justifyContent: 'space-between',
          bottom: 20, 
          right: width/2.5
        }}>
          <TouchableOpacity onPress={this.takePicture.bind(this)}>
          <Icon name="circledowno" size={45} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  maskOutter: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    marginTop: 10,
    paddingRight: 5,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  }
});