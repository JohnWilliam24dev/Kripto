import { createBottonTabNavigator} from "@react-navigation/bottom-tabs"
import Biblioteca from "../pages/Biblioteca"
import NewPass from "../pages/NewPass"

const Tab= createBottonTabNavigator();

export default function TabRoutes(){
    return(
        <Tab.Navigator>
            <Tab.Screen
            name="Biblioteca"
            component={Biblioteca}
            />
            <Tab.Screen
            name="New Pass"
            component={NewPass}
            />
        </Tab.Navigator>
    )
}