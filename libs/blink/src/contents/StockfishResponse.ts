export const stockfishResponse = {
  name: 'Stockfish Response',
  description:
    'Represents the response from a Stockfish chess engine analysis.',
  move: {
    description:
      'The best move found by the engine in long algebraic notation (LAN).',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  eval: {
    description:
      'The numerical evaluation of the position. Positive values favor White, negative values favor Black.',
    type: {
      blueId: '68ryJtnmui4j5rCZWUnkZ3DChtmEb7Z9F8atn1mBSM3L',
    },
  },
  depth: {
    description: 'The depth of analysis reached by the engine.',
    type: {
      blueId: 'DHmxTkFbXePZHCHCYmQr2dSzcNLcryFVjXVHkdQrrZr8',
    },
  },
  winChance: {
    description:
      'The estimated win probability for the side to move, expressed as a percentage.',
    type: {
      blueId: '68ryJtnmui4j5rCZWUnkZ3DChtmEb7Z9F8atn1mBSM3L',
    },
  },
  from: {
    description: 'The starting square of the best move in algebraic notation.',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  text: {
    description: 'A human-readable summary of the analysis.',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  to: {
    description: 'The ending square of the best move in algebraic notation.',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  fen: {
    description:
      'The Forsyth–Edwards Notation (FEN) string representing the analyzed chess position.',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
} as const;
