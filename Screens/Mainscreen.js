import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import Search from './Search';
import Notepad from './Notepad';
import Settings from './Settings';

const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'MainApp') {
            iconName = focused ? 'location' : 'location-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Notepad') {
            iconName = focused ? 'clipboard' : 'clipboard-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#54B435', 
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="MainApp" component={MainAppScreen} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Notepad" component={Notepad} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

const MainAppScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Main.js</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default MainApp;
