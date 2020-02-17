import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from './src/screens/LoginScreen';
import AuthLoadingScreen from './src/screens/AuthLoadingScreen';
import ScheduleScreen from './src/screens/ScheduleScreen/scheduleScreen';
import SecondScheduleScreen from "./src/screens/SecondScheduleScreen/SecondScheduleScreen";
import PublicScreen from './src/screens/PublicApptsScreen/PublicApptsScreen';
import SearchScreen from './src/screens/SearchScreen/searchScreen';
import CompleteScreen from './src/screens/CompleteScreen/CompleteScreen';
import FutureScreen from './src/screens/FutureScreen/FutureScreen';
import WelcomeScreen from './src/screens/WelcomeScreen/WelcomeScreen';
import CreateAccountScreen from './src/screens/CreateAccountScreen';

const AuthStack = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Login: LoginScreen,
  },
  {
    headerMode: "none",
    initialRouteName: "Welcome"
  }
);

const AppStack = createStackNavigator(
  {
    Home: HomeScreen,
    Schedule: ScheduleScreen,
      Second: SecondScheduleScreen,
    Welcome: WelcomeScreen,
    Public: PublicScreen,
    Search: SearchScreen,
    Complete: CompleteScreen,
    Future: FutureScreen,
    Create: CreateAccountScreen,

  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      App: AppStack,
      Auth: AuthStack,
      AuthLoading: AuthLoadingScreen,
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);








/*const screens = (
  {
    Home: HomeScreen,
    Login: LoginScreen,
  }
);


const config = {
  headerMode: 'none',
  initialRouteName: 'Login'
};

const MainNavigator = createStackNavigator(screens,config);
export default createAppContainer(MainNavigator);*/
