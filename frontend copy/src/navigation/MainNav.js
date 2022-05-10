import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import { useSelector } from "react-redux";

import HomeView from "../views/HomeView";
import LoginView from "../views/LoginView";
import ResetPasswordView from "../views/ResetPasswordView";

import AccountListView from "../views/AccountListView";
import AccountDetailsView from "../views/AccountDetailsView";
import JobListView from "../views/JobListView";
import JobDetailsView from "../views/JobDetailsView";
import OutletListView from "../views/OutletListView";
import OutletDetailsView from "../views/OutletDetailsView";
import TimesheetListView from "../views/TimesheetListView";
import TimesheetDetailsView from "../views/TimesheetDetailsView";

const MainSwitchNav = createSwitchNavigator();
const HomeSwitchNav = createSwitchNavigator();
const LoginStackNav = createStackNavigator();

const MainTabNav = createBottomTabNavigator();
const AccountStackNav = createStackNavigator();
const OutletStackNav = createStackNavigator();
const JobStackNav = createStackNavigator();
const TimesheetStackNav = createStackNavigator();

const MainNav = () => {
  const permissions = useSelector((state) => state.auth.permissions);
  return (
    <MainSwitchNav.Navigator>
      <HomeSwitchNav.Navigator>
        <HomeSwitchNav.Screen name="Home" component={HomeView} />
        <LoginStackNav.Navigator>
          <LoginStackNav.Screen name="Login" component={LoginView} />
        </LoginStackNav.Navigator>
      </HomeSwitchNav.Navigator>
    </MainSwitchNav.Navigator>
  );
};

export default MainNav;
