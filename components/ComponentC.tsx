import React from "react";
import { View } from "react-native";
import { Coords } from "../types";

const CardC: React.FC<{ coords: Omit<Coords, "height"> }> = ({ coords }) => {
  return (
    <View
      style={{
        position: "absolute",
        top: coords.y,
        left: coords.x,
        width: coords.width,
      }}
    ></View>
  );
};

export default CardC;
