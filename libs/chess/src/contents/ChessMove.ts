export const chessMove = {
  name: 'Chess Move',
  description: 'Represents a single move in the game of chess.',
  from: {
    description: "Move from, e.g. 'e2'",
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  to: {
    description: "Move to, e.g. 'e4'",
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
} as const;
