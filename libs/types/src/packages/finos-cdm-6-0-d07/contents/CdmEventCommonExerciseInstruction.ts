export const CdmEventCommonExerciseInstruction: Record<string, unknown> = {
  description:
    'Specifies the information required to communicate the choices made by the exercising party, in a financial product endowing the party with at least one option.\n',
  exerciseDate: {
    description:
      'Specifies the date on which an option contained within the financial product would be exercised. The date may be omitted if the contractual product allows for only a single date of exercise (European exercise).\n',
    type: {
      blueId: 'CdgiECBjpwU7k35HhiQi9JBRDcAEBJDGnCGvMjE3KMxX',
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
      blueId: 'this#0',
    },
  },
  exerciseTime: {
    description:
      'Specifies the time at which an option contained within the financial product woulld be exercised. The time may be omitted if the contractual product allows for only a single time of exercise (European exercise).\n',
    type: {
      blueId: '4Mi73c2rJbGTBeaTVi4xUgW33QBxsUyxSSV6ELoqnP4j',
    },
  },
  name: 'cdm/event/common/ExerciseInstruction',
  replacementTradeIdentifier: {
    description:
      'Specifies the trade identifier to apply to the replacement trade for physical exercise.',
    itemType: {
      blueId: '6zgzXM8ryqdp6CFr8BH4PKyJcHZsjXogtRiA2DcyKgBU',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
};
