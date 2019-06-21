import { createStackNavigator, createAppContainer } from "react-navigation";
import 'react-native-gesture-handler';

/***
 * Mobile Screens ree
 * start date 20-06-2019
 */
import Home from '../containers/homeContainer';
import Cloud from '../containers/cloudContainer';


export default Nagivations = createAppContainer(
    createStackNavigator({
        Cloud: { screen: Cloud },
        Home: { screen: Home },
    })
);