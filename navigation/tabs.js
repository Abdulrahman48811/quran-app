import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Text, View, Image, StyleSheet, TouchableOpacity} from "react-native"
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';


const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        
        <Tab.Navigator 
        screenOptions={{
            showLabel: false,
            tabBarLabelStyle: { color: "#fff", fontSize: 0.1 },
            style: {
                position: "absolute",
                bottom: 25,
                left: 20,
                right: 20,
                elevation: 0,
                backgroundColor: "#fffff",
                borderRadius: 15,
                height: 90,
                ...styles.shadow
            }
        }}
        >
           

            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: "center", justifyContent: "center", top: 10}}>
                        <Image 
                        source={require("../assets/home.png")}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused? "#da9100" : "#EEBC1D",
                        }}
                        />
                        <Text style={{color: focused ? "#da9100" : "#EEBC1D", fontSize: 13}}
                        >
                            HOME
                        </Text>
                    </View>
                )
            }}/>
            <Tab.Screen name="Chat" component={ChatScreen}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: "center", justifyContent: "center", top: 10}}>
                        <Image 
                        source={require("../assets/chat.png")}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused? "#da9100" : "#EEBC1D"

                        }}
                        />
                        <Text style={{color: focused ? "#da9100" : "#EEBC1D", fontSize: 13}}
                        >
                            CHAT
                        </Text>
                    </View>
                )
            }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#7F5DF0",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    }
})

export default Tabs;