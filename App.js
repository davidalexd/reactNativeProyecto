
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/views/Home';
import Services from './src/views/Services';

const Stack = createStackNavigator();
const App = () => (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Services" component={Services}/>
      </Stack.Navigator>
    </NavigationContainer>
);
export default App;
