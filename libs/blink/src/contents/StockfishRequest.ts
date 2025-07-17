export const stockfishRequest = {
  name: 'Stockfish Request',
  description: 'Represents a request to the Stockfish chess engine.',
  fen: {
    description:
      'The Forsyth–Edwards Notation (FEN) string representing the current chess board position.',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  depth: {
    description:
      'The maximum depth of analysis for the Stockfish engine to explore.',
    type: {
      blueId: 'DHmxTkFbXePZHCHCYmQr2dSzcNLcryFVjXVHkdQrrZr8',
    },
  },
} as const;
