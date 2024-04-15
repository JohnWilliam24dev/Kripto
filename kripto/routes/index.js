import  {NavigationConteiner} from '@react-navigation/native'
import TabRoutes from './tabroutes'


export default function Routes() {
  return (
    <NavigationConteiner>
        <TabRoutes/>
    </NavigationConteiner>
  )
}