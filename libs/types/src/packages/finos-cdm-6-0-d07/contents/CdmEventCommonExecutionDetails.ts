export const CdmEventCommonExecutionDetails: Record<string, unknown> = {
  description: 'Defines specific attributes that relate to trade executions.',
  executionType: {
    description:
      'Identifies the type of execution, e.g. via voice, electronically...',
    schema: {
      required: true,
    },
    type: {
      blueId: '82AwW4L6L3Hb2HAxzeRUzisvXkEvVu1AaKYAjJ657nnt',
    },
  },
  executionVenue: {
    description: 'Represents the venue on which a trade was executed.',
    type: {
      blueId: '6LRw3aCeJHKD7qGzs2HvJDoQiMs8QddUf5wSr4oagtuS',
    },
  },
  name: 'cdm/event/common/ExecutionDetails',
  packageReference: {
    description:
      'A reference to the package linking the trade with other trades, in case the trade was executed as part of a package (hence this attribute is optional).\n',
    type: {
      blueId: 'Dq7xVZaLz1ofmKsUodtSSbe6YGxaRdCtP5HM1pKU8RHF',
    },
  },
};
