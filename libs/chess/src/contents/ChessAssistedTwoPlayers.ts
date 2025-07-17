export const chessAssistedTwoPlayers = {
  name: 'Chess Assisted Two Players',
  type: {
    blueId: '6j4rVp2aAm35U7dvbYPQsdi82JUpRPb1kTfkYrhHxvqE',
  },
  workflows: {
    items: [
      {
        steps: {
          items: [
            {
              type: {
                blueId: 'DpdjTNXQdgWGxDyB1LLUNFvxSNNM9L9qGMoKZxzYMDoB',
              },
              changeset: {
                items: [
                  {
                    val: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value:
                        'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
                    },
                    op: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: 'replace',
                    },
                    path: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: '/properties/chessboard',
                    },
                  },
                  {
                    val: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: 'white',
                    },
                    op: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: 'replace',
                    },
                    path: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: '/properties/playerToMove',
                    },
                  },
                ],
              },
            },
            {
              type: {
                blueId: '6sdEGwtrVJhdto5CsDzm81YrJtHTZrdsenZkyCWJLniU',
              },
              event: {
                type: {
                  blueId: 'H6u17c2fXJnmshciJVjqxoHVH48YirQYVbFXCTk8ZSym',
                },
                playerBlackTimeline: {
                  blueId:
                    "${contract('/messaging/participants/Player Black/timeline/blueId')}",
                },
                playerWhiteTimeline: {
                  blueId:
                    "${contract('/messaging/participants/Player White/timeline/blueId')}",
                },
              },
            },
          ],
        },
        trigger: {
          event: {
            type: {
              blueId: '3uzSCGkrdX4hTFGuLbyZES7NQmiuFskCpUy572GxNQuC',
            },
          },
        },
      },
      {
        name: 'Move',
        steps: {
          items: [
            {
              name: 'Check Player',
              type: {
                blueId: 'CFKAD5Up8XpNyPHwRBEwiwSUdfFUoGqVVsW29k6te88p',
              },
              code: {
                type: {
                  blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                },
                value:
                  'let playerToMove = contract("/properties/playerToMove");\nlet expectedTimeline = (playerToMove === \'white\') ? \n    contract("/messaging/participants/Player White/timeline") :\n    contract("/messaging/participants/Player Black/timeline")\nlet timeline = event.timeline;\n\nif (timeline.blueId != expectedTimeline.blueId) {                   \n  throw new RejectAndAwaitNextEventException(\'Not your move!\');\n}\nreturn { }\n',
              },
            },
            {
              name: 'ProcessMove',
              type: {
                blueId: 'CFKAD5Up8XpNyPHwRBEwiwSUdfFUoGqVVsW29k6te88p',
              },
              code: {
                type: {
                  blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                },
                value:
                  "const chessModule = importBlueESModule('blue:9uGqgr62FtodKDH1KqGb1syeqHfSRo7ySQ5KY8bTutNu');\nconst Chess = chessModule.Chess;\n\nfunction checkMove(from, to, position) {\n    const game = new Chess(position);\n\n    try {\n        const move = game.move({ from, to });\n        if (move === null) {\n            return { legal: false, position: game.fen(), gameOver: false, winner: null, draw: false };\n        }\n        const newPosition = game.fen();\n\n        let gameOver = game.isGameOver();\n        let winner = null;\n        let draw = false;\n\n        if (gameOver) {\n            if (game.isCheckmate()) {\n                winner = game.turn() === 'w' ? 'black' : 'white';\n            } else if (game.isDraw()) {\n                draw = true;\n            }\n        }\n\n        return { legal: true, position: newPosition, gameOver: gameOver, winner: winner, draw: draw };\n    } catch (error) {\n        return { legal: false, position: game.fen(), error: error.message, gameOver: false, winner: null, draw: false };\n    }\n}\n\nlet position = contract(\"/properties/chessboard\");\nlet from = event.message.from;\nlet to = event.message.to;\nlet result;\n\nresult = checkMove(from, to, position);\n\nif (!result.legal) {\n  throw new RejectAndAwaitNextEventException('Illegal move');\n}\n\nif (result.winner === null) {\n  result.winner = 'None';\n}\n\nreturn { result };\n",
              },
            },
            {
              name: 'Emit Event',
              type: {
                blueId: '6sdEGwtrVJhdto5CsDzm81YrJtHTZrdsenZkyCWJLniU',
              },
              event: {
                type: {
                  blueId: 'EkEtUob9ZEKzd61Fk8u1KFDZVZAhCLmzxcvTLvYgp3iw',
                },
                playerMakingMove: {
                  type: {
                    blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                  },
                  value: '${contract("/properties/playerToMove")}',
                },
                winner: {
                  type: {
                    blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                  },
                  value: '${steps.ProcessMove.result.winner}',
                },
                chessboardAfterMove: {
                  type: {
                    blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                  },
                  value: '${steps.ProcessMove.result.position}',
                },
                from: {
                  type: {
                    blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                  },
                  value: '${event.message.from}',
                },
                draw: {
                  type: {
                    blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                  },
                  value: '${steps.ProcessMove.result.draw}',
                },
                to: {
                  type: {
                    blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                  },
                  value: '${event.message.to}',
                },
                gameOver: {
                  type: {
                    blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                  },
                  value: '${steps.ProcessMove.result.gameOver}',
                },
              },
            },
            {
              name: 'Apply Changes',
              type: {
                blueId: 'DpdjTNXQdgWGxDyB1LLUNFvxSNNM9L9qGMoKZxzYMDoB',
              },
              changeset: {
                items: [
                  {
                    val: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: '${steps.ProcessMove.result.position}',
                    },
                    op: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: 'replace',
                    },
                    path: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: '/properties/chessboard',
                    },
                  },
                  {
                    val: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: '${steps.ProcessMove.result.draw}',
                    },
                    op: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: 'replace',
                    },
                    path: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: '/properties/draw',
                    },
                  },
                  {
                    val: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: '${steps.ProcessMove.result.winner}',
                    },
                    op: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: 'replace',
                    },
                    path: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: '/properties/winner',
                    },
                  },
                  {
                    val: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: '${steps.ProcessMove.result.gameOver}',
                    },
                    op: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: 'replace',
                    },
                    path: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: '/properties/gameOver',
                    },
                  },
                  {
                    val: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value:
                        '${(contract("/properties/playerToMove") === "white") ? "black" : "white"}',
                    },
                    op: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: 'replace',
                    },
                    path: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: '/properties/playerToMove',
                    },
                  },
                  {
                    val: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: '${event.message}',
                    },
                    op: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: 'add',
                    },
                    path: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: '/properties/movesHistory/-',
                    },
                  },
                ],
              },
            },
          ],
        },
        trigger: {
          event: {
            type: {
              blueId: '5BDj3UbH6nUPh6bUQ9vfEchjV2vGLMwhd1FJ5UYaRcos',
            },
            message: {
              type: {
                blueId: 'MFGzp8CtRVLb9CF2xAc8kt3jwV99sag7jpdHemZmGz9',
              },
            },
          },
        },
      },
      {
        name: 'white assistant move',
        steps: {
          items: [
            {
              type: {
                blueId: '6sdEGwtrVJhdto5CsDzm81YrJtHTZrdsenZkyCWJLniU',
              },
              event: {
                type: {
                  blueId: '6AxdkLN2PgdzYJhojHRH6rt3oTAoifrJYikYvNHMbw2t',
                },
                event: {
                  type: {
                    blueId: 'H54JG6fmQ3XzYzDCqmGaAdxipfT6uQqzqjVj214WipPq',
                  },
                  message: {
                    type: {
                      blueId: 'MFGzp8CtRVLb9CF2xAc8kt3jwV99sag7jpdHemZmGz9',
                    },
                    from: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: '${event.from}',
                    },
                    to: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: '${event.to}',
                    },
                  },
                  timeline: {
                    blueId:
                      "${contract('/messaging/participants/Player White/timeline/blueId')}",
                  },
                },
              },
            },
          ],
        },
        trigger: {
          event: {
            type: {
              blueId: 'MFGzp8CtRVLb9CF2xAc8kt3jwV99sag7jpdHemZmGz9',
            },
          },
          contract: {
            type: {
              blueId: 'A5wPMJi6naaUtbmo5iPqUVG5Q8Wg5r68WERCarJctSoK',
            },
            initiateContractEntry: {
              blueId: "${contract('/properties/assistingContractWhite')}",
            },
          },
        },
      },
      {
        name: 'black assistant move',
        steps: {
          items: [
            {
              type: {
                blueId: '6sdEGwtrVJhdto5CsDzm81YrJtHTZrdsenZkyCWJLniU',
              },
              event: {
                type: {
                  blueId: '6AxdkLN2PgdzYJhojHRH6rt3oTAoifrJYikYvNHMbw2t',
                },
                event: {
                  type: {
                    blueId: 'H54JG6fmQ3XzYzDCqmGaAdxipfT6uQqzqjVj214WipPq',
                  },
                  message: {
                    type: {
                      blueId: 'MFGzp8CtRVLb9CF2xAc8kt3jwV99sag7jpdHemZmGz9',
                    },
                    from: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: '${event.from}',
                    },
                    to: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: '${event.to}',
                    },
                  },
                  timeline: {
                    blueId:
                      "${contract('/messaging/participants/Player Black/timeline/blueId')}",
                  },
                },
              },
            },
          ],
        },
        trigger: {
          event: {
            type: {
              blueId: 'MFGzp8CtRVLb9CF2xAc8kt3jwV99sag7jpdHemZmGz9',
            },
          },
          contract: {
            type: {
              blueId: 'A5wPMJi6naaUtbmo5iPqUVG5Q8Wg5r68WERCarJctSoK',
            },
            initiateContractEntry: {
              blueId: "${contract('/properties/assistingContractBlack')}",
            },
          },
        },
      },
    ],
  },
  properties: {
    winner: {
      description:
        "Indicates who won the game (e.g., 'White', 'Black', or 'None' if the game is not over or ended in a draw)",
      type: {
        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
      },
    },
    movesHistory: {
      description: 'History of moves made',
      type: {
        blueId: 'G8wmfjEqugPEEXByMYWJXiEdbLToPRWNQEekNxrxfQWB',
      },
      itemType: {
        blueId: 'MFGzp8CtRVLb9CF2xAc8kt3jwV99sag7jpdHemZmGz9',
      },
    },
    playerToMove: {
      description: "Indicates whose move it is ('white' or 'black')",
    },
    draw: {
      description:
        'Indicates whether the game ended in a draw (true) or not (false)',
      type: {
        blueId: 'EL6AjrbJsxTWRTPzY8WR8Y2zAMXRbydQj83PcZwuAHbo',
      },
    },
    chessboard: {
      description: 'Chessboard state in FEN notation',
      type: {
        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
      },
    },
    gameOver: {
      description:
        'Indicates whether the game has ended (true) or is still in progress (false)',
      type: {
        blueId: 'EL6AjrbJsxTWRTPzY8WR8Y2zAMXRbydQj83PcZwuAHbo',
      },
    },
  },
  messaging: {
    participants: {
      'Player White': {
        description: 'Player White timeline',
      },
      'Player Black': {
        description: 'Player Black timeline',
      },
    },
  },
} as const;
