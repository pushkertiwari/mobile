import { createStackNavigator, createAppContainer } from "react-navigation";
import "react-native-gesture-handler";

/***
 * Mobile Screens ree
 * start date 20-06-2019
 */
import Home from "../containers/homeContainer";
import Cloud from "../containers/cloudContainer";
import Work from "../containers/workContainer";
import Camera from "../containers/cameraContainer";
import Analysis from "../containers/analysisContainer";
import Product from "../containers/productContainer";

export default (Nagivations = createAppContainer(
  createStackNavigator({
    Product: { screen: Product },
    Analysis: { screen: Analysis },
    Home: { screen: Home },
    Work: { screen: Work },
    Camera: { screen: Camera },
    Cloud: { screen: Cloud },
  })
));
