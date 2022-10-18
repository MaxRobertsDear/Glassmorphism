import React from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import { layout } from "../constants";
import palette from "../palette";
import { Coords } from "../types";
import typography from "../typography";
import CardContents from "./CardContents";

const CardB: React.FC<{ coords: Coords }> = ({ coords }) => {
  return (
    <CardContents
      width={coords.width}
      height={coords.height}
      x={coords.x}
      y={coords.y}
    >
      <View style={{ justifyContent: "center" }}>
        <Text
          style={StyleSheet.flatten([typography.largest, typography.bright])}
        >
          Some Title
        </Text>
        <Text
          style={StyleSheet.flatten([typography.medium, typography.bright])}
        >
          Some description
        </Text>
      </View>
      <View
        style={{
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Pressable
          onPress={() => {}}
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: palette.blue.base,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white" }}>+</Text>
        </Pressable>
        <Text
          style={StyleSheet.flatten([
            typography.smaller,
            typography.bright,
            typography.center,
            {
              marginTop: layout.baseModule * 0.5,
            },
          ])}
        >
          Press me
        </Text>
      </View>
    </CardContents>
  );
};
export default CardB;
