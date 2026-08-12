export const CdmEventCommonExerciseInstruction: Record<string, unknown> = {
  description:
    'Specifies the information required to communicate the choices made by the exercising party, in a financial product endowing the party with at least one option.\n',
  exerciseDate: {
    description:
      'Specifies the date on which an option contained within the financial product would be exercised. The date may be omitted if the contractual product allows for only a single date of exercise (European exercise).\n',
    type: {
      blueId: '54eGVvFUpXJeDaqftgjfjb6rDLjcf7H3U88rMPXfzfQt',
    },
  },
  exerciseOption: {
    description: 'Specifies the Option Payout being exercised on the trade.',
    type: {
      blueId: 'E8kNFVq5rjJaDyLo4StMphfzm1hmN8457CXWNFQVj2iH',
    },
  },
  exerciseQuantity: {
    description:
      'Contains instructions for exercising the option including a quantity change, and optionally a transfer.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'this#2',
    },
  },
  exerciseTime: {
    description:
      'Specifies the time at which an option contained within the financial product woulld be exercised. The time may be omitted if the contractual product allows for only a single time of exercise (European exercise).\n',
    type: {
      blueId: '4muK6BKTZZzEij2eR3Dg7sQxj224LzRoyzr5n7UcAR3X',
    },
  },
  name: 'cdm/event/common/ExerciseInstruction',
  replacementTradeIdentifier: {
    description:
      'Specifies the trade identifier to apply to the replacement trade for physical exercise.',
    itemType: {
      blueId: 'FGujWvfXdExA7nDNwp6iHf3hWYRL3g9JS9EZfYhS7N2y',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
};
