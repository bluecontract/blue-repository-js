export const CdmEventCommonCreditEvent = {
  auctionDate: {
    description: 'The date on which the auction is scheduled to occur.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  creditEventType: {
    description: 'The type of credit event taking place.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'FRSvW86AnukqsUtioAtNxLvGvH8hBV3m6J2YV3egXjjV',
    },
  },
  description: 'Specifies the relevant data regarding a credit event.',
  eventDeterminationDate: {
    description:
      'The date in which the credit event is determined by the Credit Derivatives Determinations Comitee.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  finalPrice: {
    description: 'The final price resulting from the auction.',
    type: {
      blueId: 'wuC3RHpv6ahucWwxTgdeQyeUP8ecWQQqgMvSpx3Z543',
    },
  },
  name: 'cdm/event/common/CreditEvent',
  publiclyAvailableInformation: {
    description:
      'A public information source, e.g. a particular newspaper or electronic news service, that may publish relevant information used in the determination of whether or not a credit event has occurred.\n',
    itemType: {
      blueId: '2fzQ4bmVx18K4uraBPwsuECfabcNN1YjL3czhxh3Da7k',
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
  recoveryPercent: {
    description:
      'The percentage of the original value of the asset affected by the credit event that can be recovered.',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  referenceInformation: {
    description:
      'The reference entity, part of a credit basket, impacted by the credit event.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'HDWPv3g9U1KUdNNbF554aWveShvcV6UnPnH8HQGqtppM',
    },
  },
} as const;
