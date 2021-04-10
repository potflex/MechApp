import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// navigation
import DrawerStack from './DrawerStack';

// screens
import Home from '../screens/Home';
import Profile from '../screens/profile';
import Shop from '../screens/Shop';
import ModalHelp from '../screens/ModalHelp';
import ModalQRCode from '../screens/ModalQRCode';
import ModalTutorialBike from '../screens/ModalTutorialBike';

const StackNavigator = createStackNavigator(
  {
    DrawerStack,

    // Modals
    // /////////////////////////////////////////////////////////////////////////
    Home,
    Shop,
    Profile,
    ModalHelp,
    ModalQRCode,
    ModalTutorialBike
  },
  {
    headerMode: 'none',
    initialRouteName: 'DrawerStack',
    mode: 'modal'
  }
);

const App = createAppContainer(StackNavigator);

export default App;
