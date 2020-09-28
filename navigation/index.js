import React from "react";

import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";

import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import Homepage from "../screens/Homepage";

const colors = {
    accent: "#F3534A",
    primary: "#0AC4BA",
    secondary: "#2BDA8E",
    tertiary: "#FFE358",
    black: "#323643",
    white: "#FFFFFF",
    gray: "#9DA3B4",
    gray2: "#C5CCD6"
  };
  

const screens = createStackNavigator(
    {
        Welcome,
        Login,
        Homepage
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                height: 16,
                backgroundColor: white,
                borderBottomColor: "transparent",
                elevation: 0
            },
            headerBackTitle: null,
            headerLeftContainerStyle: {
                alignItems: "center",
                marginLeft: 4,
                paddingRight: 2
            },
            headerRightContainerStyle: {
                alignItems: "center",
                paddingRight: 2
            }
        }
    }
    
)

export default createAppContainer(screens);