import React from "react";
import { Text, StyleSheet } from "react-native";
import { layout } from "../constants";
import typography from "../typography";

const CardA: React.FC<{ y: number }> = ({ y }) => {
  const fullName = "John Doe";
  return (
    <>
      <Text
        style={StyleSheet.flatten([
          typography.medium,
          ,
          typography.bright,
          {
            position: "absolute",
            top: y,
            left: layout.baseModule * 2,
          },
        ])}
      >
        Good afternoon,
      </Text>
      <Text
        style={StyleSheet.flatten([
          typography.medium,
          ,
          typography.bright,
          {
            fontSize: 24,
            position: "absolute",
            top: y + layout.baseModule * 2,
            left: layout.baseModule * 2,
          },
        ])}
      >
        {fullName}
      </Text>
    </>
  );
};

export default CardA;
