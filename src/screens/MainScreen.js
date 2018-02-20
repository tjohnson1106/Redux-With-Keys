import React, { Component } from "react";
import { View, Platform, Text } from "react-native";
import Expo from "expo";
import styled from "styled-components/native";

import icon from "../../assets/icons/pure-icon.png";
import { STATUS_BAR_HEIGHT } from "../constants/index";

function cacheImages(images) {
  return images.map(images => {
    if (typeof image === "string") {
      return Image.prefetch(image);

      return Expo.Asset.fromModule(image).downloadAsync();
    }
  });
}

const MainView = styled.View`
  flex: 1;
  background-color: #ddd;
`;
const ImageIcon = styled.Image`
  margin-top: 20;
  margin-left: 10;
  width: 40;
  height: 40;
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
    headerLeft: <ImageIcon source={icon} />
  });
  render() {
    return <MainView>{/* Chord Modal */}</MainView>;
  }
}

export default MainScreen;
