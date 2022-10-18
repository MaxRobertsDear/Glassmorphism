import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { layout, BORDER_RADIUS } from "../constants";
import palette from "../palette";
import { Coords } from "../types";
import typography from "../typography";

type Props = {};

const CardD: React.FC<{ coords: Coords }> = ({ coords }) => (
  <View
    style={{
      width: coords.width,
      height: coords.height,
      position: "absolute",
      top: coords.y,
      left: coords.x,
      padding: layout.baseModule * 2,
      justifyContent: "space-between",
      backgroundColor: palette.white,
      borderRadius: BORDER_RADIUS,
    }}
  >
    <Text
      style={StyleSheet.flatten([
        typography.smaller,
        { position: "absolute", top: -20 },
      ])}
    >
      Card A
    </Text>
    <View>
      <Text style={StyleSheet.flatten([typography.medium])}>Some Title</Text>
      <Text
        style={StyleSheet.flatten([typography.smaller, typography.grayDark])}
      >
        Some Meta Data
      </Text>
    </View>
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text style={StyleSheet.flatten([typography.medium])}>Some details</Text>
      <Text>{">"}</Text>
    </View>
  </View>
);

export default CardD;
