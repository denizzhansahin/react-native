import "react-native-gesture-handler"
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewDetails'
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="ReviewDetails" component={ReviewDetails} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default MyDrawer