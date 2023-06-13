/*
position
(0,0) (1,0) (2,0) (3,0)
(0,1) (1,1) (2,1) (3,1)
(0,2) (1,2) (2,2) (3,2)
(0,3) (1,3) (2,3) (3,3)
*/

export type mapTileTypes = {
  src?: string;
  position: {
    x: number;
    y: number;
  };
};

const imgDir = "./tiles";
export const MapSize = 2048;
export const mapTilesNumber = [4, 4];
export const mapTiles: mapTileTypes[] = [
  {
    position: {
      x: 0,
      y: 0,
    },
  },
  {
    src: `${imgDir}/1-0.png`,
    position: {
      x: 1,
      y: 0,
    },
  },
  {
    src: `${imgDir}/2-0.png`,
    position: {
      x: 2,
      y: 0,
    },
  },
  {
    position: {
      x: 3,
      y: 0,
    },
  },
  {
    position: {
      x: 0,
      y: 1,
    },
  },
  {
    src: `${imgDir}/1-1.png`,
    position: {
      x: 1,
      y: 1,
    },
  },
  {
    src: `${imgDir}/2-1.png`,
    position: {
      x: 2,
      y: 1,
    },
  },
  {
    src: `${imgDir}/3-1.png`,
    position: {
      x: 3,
      y: 1,
    },
  },
  {
    position: {
      x: 0,
      y: 2,
    },
  },
  {
    src: `${imgDir}/1-2.png`,
    position: {
      x: 1,
      y: 2,
    },
  },
  {
    src: `${imgDir}/2-2.png`,
    position: {
      x: 2,
      y: 2,
    },
  },
  {
    position: {
      x: 3,
      y: 2,
    },
  },
  {
    src: `${imgDir}/0-3.png`,
    position: {
      x: 0,
      y: 3,
    },
  },
  {
    src: `${imgDir}/1-3.png`,
    position: {
      x: 1,
      y: 3,
    },
  },
  {
    position: {
      x: 2,
      y: 3,
    },
  },
  {
    position: {
      x: 3,
      y: 3,
    },
  },
];
