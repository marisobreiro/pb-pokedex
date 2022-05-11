import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { BemVindoScreen } from "./BemVindoScreen/BemVindoScreen";
import { DetalhesScreen } from "./DetalhesScreen/DetalhesScreen";
import { ListaScreen } from "./ListaScreen/ListaScreen";

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="BemVindoScreen" component={BemVindoScreen}/>
            <Stack.Screen name="ListaScreen" component={ListaScreen} />
            <Stack.Screen name="DetalhesScreen" component={DetalhesScreen} />
        </Stack.Navigator>
    )
}