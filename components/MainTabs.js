import React from "react";
// navigation
import { StyleSheet, View, FlatList, TextInput, Button } from "react-native";
import { createBottomTabNavigator } from "../node_modules/@react-navigation/bottom-tabs";
import { Ionicons } from "../node_modules/@expo/vector-icons";
// components
import ProfileScreen from "./ProfileScreen.js";
import SettingsScreen from "./SettingsScreen.js";
import MatchScreen from "./MatchScreen.js";
import ChatScreen from "./ChatScreen.js";
// styling
import styles from "./styles.js";

const Tab = createBottomTabNavigator();

function MainTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === "Profile") {
                        iconName = focused ? "md-person" : "md-person";
                    } else if (route.name === "Settings") {
                        iconName = focused ? "md-settings" : "md-settings";
                    } else if (route.name === "Match") {
                        iconName = focused ? "md-search" : "md-search";
                    } else if (route.name === "Chat") {
                        iconName = focused ? "ios-chatbubbles" : "ios-chatbubbles";
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                    
                /* tabBarLabel: route.name */
                    
            })}

            // Icon change when clicking the tab
            tabBarOptions={{
                activeTintColor: "#41B8E8",
                inactiveTintColor: "#264653",
                adaptive: true,
                tabStyle: {
                    padding: 0, margin: 10,   
                },
            }}
        >
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
            <Tab.Screen name="Match" component={MatchScreen} />
            <Tab.Screen name="Chat" component={ChatScreen} />
        </Tab.Navigator>
    );
}

export default MainTabs;