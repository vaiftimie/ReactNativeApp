import { createStackNavigator } from "react-navigation";
import HomeScreen from './screens/HomeScreen';
import NewTaskScreen from './screens/NewTaskScreen';

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
    },
    NewTask: {
        screen: NewTaskScreen,
    },
    }, {
        initialRouteName: 'Home',
        headerMode: 'none'
    });

export default AppNavigator;