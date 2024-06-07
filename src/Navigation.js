import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";


import Home from './screens/Home'
import Add from './screens/Add';
import Logout from './screens/Logout';
import Login from './screens/Login';
import Register from './screens/Register'; 



const Stack = createNativeStackNavigator();

function MyStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Add" component={Add} options={{presentation: 'modal'}}/>
            <Stack.Screen name="Logout" component={Logout} options={{presentation: 'modal'}}/>
            <Stack.Screen name="Login" component={Login} options={{presentation: 'modal'}}/>
            <Stack.Screen name="Register" component={Register} options={{presentation: 'modal'}}/>
        </Stack.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}