import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Home from '../screens/Home'
import Recipes from '../screens/Recipes'
import Contact from '../screens/Contact'
import HIW from '../screens/HIW'
import Login from '../screens/Login'
import Detail from '../screens/Detail'


const DrawerNav = createDrawerNavigator()

export default function Drawer(){
    return(<>
        <DrawerNav.Navigator>
            <DrawerNav.Screen name='Home' component={Home} />
            <DrawerNav.Screen name='HIW' component={HIW} />
            <DrawerNav.Screen name='Recipes' component={Recipes} />
            <DrawerNav.Screen name='Contact' component={Contact} />
            <DrawerNav.Screen name='Login' component={Login} />
            <DrawerNav.Screen name=' ' component={Detail} />
        </DrawerNav.Navigator>
    </>
    )
}