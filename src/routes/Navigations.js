import { createStackNavigator, createAppContainer } from "react-navigation";
import 'react-native-gesture-handler';

/***
 * Mobile Screens ree
 * start date 20-06-2019
 */
import Home from '../containers/homeContainer';
import Cloud from '../containers/cloudContainer';
import Work from '../containers/workContainer';
import Camera from '../containers/cameraContainer';


export default Nagivations = createAppContainer(
    createStackNavigator({ 
        Home: { screen: Home },
        Camera: {screen:Camera},
        Work: { screen:Work},
        Cloud: { screen: Cloud },
       
    })
);