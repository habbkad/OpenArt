import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Pages/Home/HomeScreen';
import Menu from '../Pages/Menu/Menu';
import Details_auctions from '../Pages/Detail_Auction/Details_auctions';
import Detail_sold from '../Pages/Detail_Sold/Detail_sold';

type Props = {};
const Stack = createNativeStackNavigator();

const Routing = (props: Props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="Details_auction"
          component={Details_auctions}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="Details_sold"
          component={Detail_sold}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routing;
