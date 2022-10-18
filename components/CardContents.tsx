import React from "react";
import { View, StyleSheet } from "react-native";
import { BORDER_RADIUS, layout } from "../constants";

const CardContents = ({
  children,
  height,
  width,
  x,
  y,
  containerStyle = {},
}) => (
  <View
    style={StyleSheet.flatten([
      {
        width: width,
        height: height,
        left: x,
        top: y,
        borderRadius: BORDER_RADIUS,
        position: "absolute",
        padding: layout.baseModule * 2,
        flexDirection: "row",
        justifyContent: "space-between",
      },
      containerStyle,
    ])}
  >
    {children}
  </View>
);

export default CardContents;
