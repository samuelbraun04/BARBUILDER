import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import HelpScreen from './HelpScreen';
import MainScreen from './MainScreen';

const Stack = createStackNavigator();

export default function App() {

  return (
    
    <NavigationContainer theme={DefaultTheme}>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen 
          name="Main" 
          component={MainScreen} 
          options={({ navigation }) => ({
            title: 'BARBUILDER',
            headerShown: false,
            headerRight: () => (
              <FontAwesome 
                name="question-circle" 
                size={30} 
                color={DefaultTheme.colors.text} 
                style={styles.icon} 
                onPress={() => navigation.navigate('Help')} 
              />
            )
          })} 
        />
        <Stack.Screen 
          name="Help" 
          component={HelpScreen} 
          options={{
            title: 'Help',
            headerBackTitle: 'Back',
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}