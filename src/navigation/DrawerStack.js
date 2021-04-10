import { createDrawerNavigator } from 'react-navigation-drawer';

// screens
import Landing from '../screens/Landing';
import CustomDrawerContent from '../components/CustomDrawerContent';

const DrawerStack = createDrawerNavigator(
  {
    Landing
  },
  {
    contentComponent: CustomDrawerContent,
    headerMode: 'none',
    hideStatusBar: true
  }
);

export default DrawerStack;
