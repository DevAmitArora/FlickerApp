import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './src/app/screens/Home';

const navigator = createStackNavigator(
  {
    Home: Home,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Flicker',
    },
  },
);

export default createAppContainer(navigator);
