export const BOX_WIDTH = 60 * 4;

export const layout = {
  baseModule: 10,
  baseRadius: 3,
};
export const BORDER_RADIUS = layout.baseRadius * 4;
export const BASE_CARD_HEIGHT = layout.baseModule * 12;

export const SPEND_DIAMETER = BOX_WIDTH - layout.baseModule * 2;

export const yCoordCardA = layout.baseModule * 3;
export const yCoordCardB = yCoordCardA + layout.baseModule * 7;
export const yCoordCardC =
  yCoordCardB + BASE_CARD_HEIGHT + layout.baseModule * 2;
export const yCoordsCardD =
  yCoordCardC + SPEND_DIAMETER + layout.baseModule * 4;
export const yCoordsCardE = yCoordsCardD;
