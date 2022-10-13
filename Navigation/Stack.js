import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detail from '../screens/Detail';
import Products from '../screens/Recipes'

const Stack = createNativeStackNavigator();

function MyStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Products" component={Products} />
            <Stack.Screen name="Detail" component={Detail} />

        </Stack.Navigator>
    )
}
export default MyStackScreen