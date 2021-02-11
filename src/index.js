/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView } from 'react-native';
import Calculator from './components/Calculator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import { translate } from './locales';

const customTabBarStyle = {
  activeTintColor: '#6e37e0',
  inactiveTintColor: 'gray',
  style: { backgroundColor: '#fff', height: 60 },
};

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#16161B' }}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={customTabBarStyle}
          shifting="false">
          <Tab.Screen
            name="calculator"
            options={{
              tabBarLabel: translate('calculator'),
              tabBarIcon: ({ color }) => (
                <Icon name="calculator" color={color} size={26} />
              ),
            }}
            component={Calculator} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
