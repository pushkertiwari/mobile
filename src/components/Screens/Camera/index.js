import React, { Component, Fragment } from 'react';
import { StyleSheet, View, Image,Alert, TouchableOpacity, Dimensions } from 'react-native';
import { moderateScale } from "../../../helpers/ResponsiveFonts";
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
      this.props.navigation.navigate('Analysis',{
        image:'data:image/jpg;base64,' + data.base64
      });
    }
  };

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
          <Image  source={require('../../../assets/images/barIcon.png')} />
        </View>
        <View style={{
          margin: moderateScale(5),
          position: "absolute",
          height: moderateScale(50),
          bottom: moderateScale(70), 
          right: moderateScale(width/3)
        }}>
          <TouchableOpacity onPress={this.takePicture.bind(this)}>
            <Image  source={require('../../../assets/images/Ellipse.png')} />
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
    borderRadius: moderateScale(5),
    padding: moderateScale(15),
    paddingHorizontal: moderateScale(20),
    alignSelf: 'center',
    margin: moderateScale(20),
  },
  maskOutter: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    marginTop: moderateScale(10),
    paddingRight: moderateScale(5),
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  }
});