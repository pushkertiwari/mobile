import { createStackNavigator, createAppContainer } from "react-navigation";
import 'react-native-gesture-handler';

/***
 * Mobile Screens 
 * start date 20-06-2019
 */
import Home from '../containers/homeContainer';


export default Nagivations =  createAppContainer(
    createStackNavigator({
        Home: { screen: Home },
    })
);