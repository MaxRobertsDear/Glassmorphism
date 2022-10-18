import {
  BackdropBlur,
  Canvas,
  Fill,
  Group,
  Image,
  rect,
  Rect,
  rrect,
  useImage,
  vec,
  LinearGradient,
  Skia,
  useValue,
  useComputedValue,
  useSharedValueEffect,
} from "@shopify/react-native-skia";
import React from "react";
import { Dimensions } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import CardA from "./ComponentA";
import CardB from "./ComponentB";
import CardC from "./ComponentC";
import CardD from "./ComponentD";
import CardE from "./ComponentE";
import {
  layout,
  yCoordCardB,
  BASE_CARD_HEIGHT,
  yCoordCardC,
  yCoordsCardD,
  yCoordsCardE,
  BORDER_RADIUS,
  yCoordCardA,
  SPEND_DIAMETER,
} from "../constants";
import palette from "../palette";
import { Coords } from "../types";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");
const CONTENT_WIDTH = WINDOW_WIDTH - layout.baseModule * 4;

const coordsCardB: Coords = {
  x: layout.baseModule * 2,
  y: yCoordCardB,
  width: CONTENT_WIDTH,
  height: BASE_CARD_HEIGHT,
};
const coordsCardC: Coords = {
  x: layout.baseModule * 2,
  y: yCoordCardC,
  width: CONTENT_WIDTH,
  height: SPEND_DIAMETER,
};
const coordsCardD: Coords = {
  x: layout.baseModule * 2,
  y: yCoordsCardD,
  width: (WINDOW_WIDTH - layout.baseModule * 4) * 0.5 - layout.baseModule,
  height: BASE_CARD_HEIGHT,
};
const coordsCardE: Coords = {
  x: WINDOW_WIDTH * 0.5 + layout.baseModule,
  y: yCoordsCardE,
  width: (WINDOW_WIDTH - layout.baseModule * 4) * 0.5 - layout.baseModule,
  height: BASE_CARD_HEIGHT,
};

const cardB = rrect(
  rect(coordsCardB.x, coordsCardB.y, coordsCardB.width, coordsCardB.height),
  BORDER_RADIUS,
  BORDER_RADIUS
);
const cardC = rrect(
  rect(
    (WINDOW_WIDTH - SPEND_DIAMETER) * 0.5,
    coordsCardC.y + layout.baseModule,
    SPEND_DIAMETER,
    SPEND_DIAMETER
  ),
  SPEND_DIAMETER / 2,
  SPEND_DIAMETER / 2
);

export const ExamplePanGesture = () => {
  const image = useImage(require("../assets/dark-background.png"));

  const reanimatedY = useSharedValue(0);
  const skiaY = useValue(0);

  const panHandler = Gesture.Pan().onUpdate((event) => {
    reanimatedY.value = event.translationY;
  });

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: reanimatedY.value }],
  }));

  // sync skia val with reanimated val
  useSharedValueEffect(() => {
    skiaY.current = reanimatedY.value;
  }, reanimatedY);

  // translate Y of skia Group based on skiaY
  const transform = useComputedValue(
    () => [{ translateY: skiaY.current }],
    [skiaY]
  );

  const backDropBlurClipPath = Skia.Path.Make();
  backDropBlurClipPath.addRRect(cardB);
  backDropBlurClipPath.addRRect(cardC);

  return image ? (
    <>
      <Canvas
        style={{
          flex: 1,
        }}
      >
        <Fill color={palette.gray.lighter} />
        <Group>
          <Image
            image={image}
            x={0}
            y={0}
            width={WINDOW_WIDTH}
            height={WINDOW_HEIGHT / 2}
            fit={"cover"}
          />
          <Rect x={0} y={0} width={WINDOW_WIDTH} height={WINDOW_HEIGHT / 2}>
            <LinearGradient
              start={vec(WINDOW_WIDTH / 2, WINDOW_HEIGHT / 4)}
              end={vec(WINDOW_WIDTH / 2, WINDOW_HEIGHT / 2 - 20)}
              colors={["rgba(241, 241, 241, 0)", "rgba(241, 241, 241, 1)"]}
            />
          </Rect>
        </Group>
        <Group transform={transform}>
          <BackdropBlur blur={20} clip={backDropBlurClipPath}>
            <Fill color={"rgba(255, 255, 255, 0.3)"} />
          </BackdropBlur>
        </Group>
      </Canvas>
      <GestureDetector gesture={panHandler}>
        <Animated.View
          style={[
            { position: "absolute", width: "100%", height: "100%" },
            animatedStyles,
          ]}
        >
          <CardA y={yCoordCardA} />
          <CardB coords={coordsCardB} />
          <CardC coords={coordsCardC} />
          <CardD coords={coordsCardD} />
          <CardE coords={coordsCardE} />
        </Animated.View>
      </GestureDetector>
    </>
  ) : null;
};

export default ExamplePanGesture;
