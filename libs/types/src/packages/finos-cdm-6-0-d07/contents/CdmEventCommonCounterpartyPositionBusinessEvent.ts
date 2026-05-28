export const CdmEventCommonCounterpartyPositionBusinessEvent = {
  after: {
    description: 'Specifies the after position state(s) created.',
    itemType: {
      blueId: '5J6Xvc5wFYpUHdUb6UeB9296nV6NEZu3TW92cnZ8Jou2',
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
  corporateActionIntent: {
    description: 'The intent of a corporate action on the position.',
    type: {
      blueId: '2BvXwm2PJoPCvRz7g8DFbxuMwvaXy1mHq7Tnw2QmQAn6',
    },
  },
  description:
    'A business event represents a life cycle event of a position. The combination of the state changes results in a qualifiable life cycle event.\n',
  effectiveDate: {
    description:
      'The date on which the event contractually takes effect, when different from the event date.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  eventDate: {
    description:
      'Specifies the date on which the event is taking place. This date is equal to the trade date in the case of a simple execution.  However it can be different from the trade date, for example in the case of a partial termination.\n',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  intent: {
    description:
      'The intent attribute is meant to be specified when the event qualification cannot be programmatically inferred from the event features. As a result it is only associated with those primitives that can give way to such ambiguity, the quantityChange being one of those.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'AFqxQfgMVPciFz41pKMubsG7wUWhEhMwAoy3bZ9AzEKY',
    },
  },
  name: 'cdm/event/common/CounterpartyPositionBusinessEvent',
  packageInformation: {
    description:
      'Specifies the package information in case the business event represents several trades executed as a package (hence this attribute is optional). The package information is only instantiated once at the business event level to preserve referential integrity, whereas individual trades make reference to it to identify that they are part of a package.\n',
    type: {
      blueId: '8MnuJdVvYHPDMwmMys25jzVcinAGzNijc9wRSzKdQaS3',
    },
  },
} as const;
