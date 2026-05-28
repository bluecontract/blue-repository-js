export const CdmEventCommonExerciseInstruction = {
  description:
    'Specifies the information required to communicate the choices made by the exercising party, in a financial product endowing the party with at least one option.\n',
  exerciseDate: {
    description:
      'Specifies the date on which an option contained within the financial product would be exercised. The date may be omitted if the contractual product allows for only a single date of exercise (European exercise).\n',
    type: {
      blueId: 'EMewkrxSUCQddjXsDB5V833VQJGmxV68bbryLqrUJfKz',
    },
  },
  exerciseOption: {
    description: 'Specifies the Option Payout being exercised on the trade.',
    type: {
      blueId: 'G3CzbfYpxoJLYRFaNem1FoCEK8YU8gE9Xy8ESCNoAr5e',
    },
  },
  exerciseQuantity: {
    description:
      'Contains instructions for exercising the option including a quantity change, and optionally a transfer.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'this#2',
    },
  },
  exerciseTime: {
    description:
      'Specifies the time at which an option contained within the financial product woulld be exercised. The time may be omitted if the contractual product allows for only a single time of exercise (European exercise).\n',
    type: {
      blueId: 'AYcPv3zXSTKojz4MpYi8KWL5Z9TVBuzNzHmzsZe3cYcC',
    },
  },
  name: 'cdm/event/common/ExerciseInstruction',
  replacementTradeIdentifier: {
    description:
      'Specifies the trade identifier to apply to the replacement trade for physical exercise.',
    itemType: {
      blueId: '5NL7sLmwPvsGQHH4cx5g8ajq8wbZMimREKKDky2KMRFQ',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 0,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
} as const;
