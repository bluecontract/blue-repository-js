export const CdmEventCommonExecutionDetails = {
  description: 'Defines specific attributes that relate to trade executions.',
  executionType: {
    description:
      'Identifies the type of execution, e.g. via voice, electronically...',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'HEn2fsPSsyYtggnb2vhQ7afyPMTHJnpQRj7VE6DCDUNk',
    },
  },
  executionVenue: {
    description: 'Represents the venue on which a trade was executed.',
    type: {
      blueId: '6NmyTe5CqfuusJQg46VWDV5a5FXqiZnkQmXduwAjC73o',
    },
  },
  name: 'cdm/event/common/ExecutionDetails',
  packageReference: {
    description:
      'A reference to the package linking the trade with other trades, in case the trade was executed as part of a package (hence this attribute is optional).\n',
    type: {
      blueId: '8MnuJdVvYHPDMwmMys25jzVcinAGzNijc9wRSzKdQaS3',
    },
  },
} as const;
