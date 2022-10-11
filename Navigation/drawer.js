import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Home from '../screens/Home'
import Products from '../screens/Products'
import Contact from '../screens/Contact'


const DrawerNav = createDrawerNavigator()

export default function Drawer(){
    return(<>
        <DrawerNav.Navigator>
            <DrawerNav.Screen name='Home' component={Home} />
            <DrawerNav.Screen name='Products' component={Products} />
            <DrawerNav.Screen name='Contact' component={Contact} />
        </DrawerNav.Navigator>
    </>
    )
}