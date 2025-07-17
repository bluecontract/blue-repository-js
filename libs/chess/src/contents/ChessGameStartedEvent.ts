export const chessGameStartedEvent = {
  name: 'Chess Game Started Event',
  description: 'Informs that the game has started',
  playerBlackTimeline: {
    description: 'Black timeline',
  },
  playerWhiteTimeline: {
    description: 'White timeline',
  },
} as const;
