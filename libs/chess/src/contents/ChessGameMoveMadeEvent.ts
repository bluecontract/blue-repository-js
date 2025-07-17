export const chessGameMoveMadeEvent = {
  name: 'Chess Game Move Made Event',
  playerMakingMove: {
    description: '"white" or "black"',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  winner: {
    description: '"white" or "black"',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  chessboardAfterMove: {
    description: 'fen position',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  from: {
    description: 'e.g. e2',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  to: {
    description: 'e.g. e4',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  draw: {},
  gameOver: {},
} as const;
