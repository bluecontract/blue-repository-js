export const CdmEventCommonBusinessEvent = {
  after: {
    description: 'Specifies the after trade state(s) created.',
    itemType: {
      blueId: 'J8SrPWrtbe4J2GJXdDo51yKLW7GpaZmwrtGnvLKFRArQ',
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
    type: {
      blueId: '2BvXwm2PJoPCvRz7g8DFbxuMwvaXy1mHq7Tnw2QmQAn6',
    },
  },
  description:
    'A business event represents a life cycle event of a trade. The combination of the state changes results in a qualifiable life cycle event. An example of a Business Event is a PartialTermination which is a defined by a quantity change primitive event.\n',
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
  eventQualifier: {
    description:
      'The CDM event qualifier, which corresponds to the outcome of the isEvent qualification logic which qualifies the lifecycle event as a function of its features (e.g. PartialTermination, ClearingSubmission, Novation, ...).\n',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  instruction: {
    description: 'Specifies the instructions to create the Business Event.',
    itemType: {
      blueId: 'DmjvxxGktgvt2rg94yzABomuVAXUs5cCj4GRYGt8yxhr',
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
  intent: {
    description:
      'The intent attribute is meant to be specified when the event qualification cannot be programmatically inferred from the event features. As a result it is only associated with those primitives that can give way to such ambiguity, the quantityChange being one of those. An example of such is a reduction in the trade notional, which could be interpreted as either a trade correction (unless a maximum period of time post-event is specified as part of the qualification), a partial termination or a portfolio rebalancing in the case of an equity swap. On the other hand, an event such as the exercise is not expected to have an associated intent as there should not be ambiguity.\n',
    type: {
      blueId: '7LGs1cSGANHMycsBA9QoTJgdxMMVCPo5KnmfspkQtue5',
    },
  },
  name: 'cdm/event/common/BusinessEvent',
  packageInformation: {
    description:
      'Specifies the package information in case the business event represents several trades executed as a package (hence this attribute is optional). The package information is only instantiated once at the business event level to preserve referential integrity, whereas individual trades make reference to it to identify that they are part of a package.\n',
    type: {
      blueId: '8MnuJdVvYHPDMwmMys25jzVcinAGzNijc9wRSzKdQaS3',
    },
  },
} as const;
