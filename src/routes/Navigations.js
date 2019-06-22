import { createStackNavigator, createAppContainer } from "react-navigation";
import 'react-native-gesture-handler';

/***
 * Mobile Screens ree
 * start date 20-06-2019
 */
import Home from '../containers/homeContainer';
import Cloud from '../containers/cloudContainer';
import Work from '../containers/workContainer';


export default Nagivations = createAppContainer(
    createStackNavigator({ 
        Work: { screen:Work},
        Home: { screen: Home },
        Cloud: { screen: Cloud },
       
    })
);