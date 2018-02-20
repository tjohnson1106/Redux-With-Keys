import React, { Component } from "react";
import { View, Platform } from "react-native";
import styled from "styled-components/native";
import { STATUS_BAR_HEIGHT } from "../constants/index";

const MainView = styled.View`
  flex: 1;
  background-color: #ddd;
`;

class MainScreen extends Component {
  static NavigationOptions = () => ({
    title: "Redux Keys",
    headerStyle: {
      height: Platform.OS === "android" ? 54 + STATUS_BAR_HEIGHT : 54,
      backgroundColor: "#2196F3"
    },
    headerTitleStyle: {
      height: Platform.OS === "android" ? STATUS_BAR_HEIGHT : 0,
      color: white
    },
    headerLeft: <View>I</View>
  });
  render() {
    return <MainView>{/* Chord Modal */}</MainView>;
  }
}

export default MainScreen;
