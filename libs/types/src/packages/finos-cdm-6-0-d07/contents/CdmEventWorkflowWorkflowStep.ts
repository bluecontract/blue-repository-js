export const CdmEventWorkflowWorkflowStep: Record<string, unknown> = {
  account: {
    description:
      'Optional account information that could be associated to the event.',
    itemType: {
      blueId: 'Ci7ty5zffGzjgsQdhnezMazESuasmjVRABXcDJanwgLf',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  action: {
    description:
      'Specifies whether the event is a new, a correction or a cancellation.',
    type: {
      blueId: 'GfTPwAq9qf8LsrvvH2PED6R92Rtsa1SbCnqdxkjhMYFQ',
    },
  },
  approval: {
    description:
      'Optional party approvals for the current workflow step. A workflow step can have any number of parties associated to it, thus this object is represented as a list. All parties that are expected to provide approval should have an item in this list that references them.\n',
    itemType: {
      blueId: '9AHt7RbQJpPN29t7Dit6xemqAkC14HePBm5ayDJbHnqS',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  businessEvent: {
    description:
      'Life cycle event for the step. The businessEvent is optional when a proposedEvent or rejection are present.',
    type: {
      blueId: '2mPyPCMLGUH8LTsXeCx7sE8MoUkyjXsN5wHNZkzNvgXC',
    },
  },
  counterpartyPositionBusinessEvent: {
    description: 'Documents the life cycle event for a position.',
    type: {
      blueId: '6crPYSSUWEcDZ3RkdT8acaFQUW3W3Ly2kdiaX8dpynAw',
    },
  },
  creditLimitInformation: {
    type: {
      blueId: '9Lq4JKDRKKVSQeCRSYR1PvVRZ5HB3Cbqa1U5FKk7nBiV',
    },
  },
  description:
    'A workflow step represents the state of a business event. The workflow step contains a reference to a previous WorkflowStep in order to preserve lineage. A workflow step is accepted if it contains a business event, proposed if proposedEvent is present and is rejected if the rejected flag is set.\n',
  eventIdentifier: {
    description:
      'The identifier(s) that uniquely identify a lifecycle event. The unbounded cardinality is meant to provide the ability to associate identifiers that are issued by distinct parties. As an example, each of the parties to the event may choose to associate their own identifiers to the event.\n',
    itemType: {
      blueId: '2uYMDSb9jahYcE91VXzzWYsnUVct3k5thb1czx4jPYF7',
    },
    schema: {
      minItems: 1,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  lineage: {
    description:
      'The lineage attribute provides a linkage among lifecycle events through the globalKey hash value. One example is when a given lifecycle event is being corrected or cancelled. In such case, each subsequent event will have lineage into the prior version of that event. The second broad use case is when an event has a dependency upon either another event (e.g. the regular payment associated with a fix/float swap will have a lineage into the reset event, which will in turn have a lineage into the observation event for the floating rate and the contract) or a contract (e.g. the exercise of an option has a lineage into that option).\n',
    type: {
      blueId: '8F2a2dkMM98d7KGUagPkBdhXVErYpJBwveTH1UGZo57N',
    },
  },
  messageInformation: {
    description:
      'Contains all information pertaining the FpML messaging header',
    type: {
      blueId: '22GjU2seJ6LjqoYyFFC6Wzrh5DA1XxUKBbuqNn2vnR3d',
    },
  },
  name: 'cdm/event/workflow/WorkflowStep',
  nextEvent: {
    description:
      'The intended next event can be specified, even if the instructions are not known yet.',
    type: {
      blueId: '3Xoecxdbp2YNAeFqQmdNizAeci6amtY3kLG78kaWSD3a',
    },
  },
  party: {
    description:
      'The specification of the event parties. This attribute is optional, as not applicable to certain events (e.g. most of the observations).\n',
    itemType: {
      blueId: 'DqdehuAibH9Q4aC2zYPJp37ysFFDSYwuUYRNYQCeevFd',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  previousWorkflowStep: {
    description:
      'Optional previous workflow step that provides lineage to workflow steps that precedes it.',
    type: {
      blueId: '5FztK8LEabxgM4scSQjt3nPYnDnrndC8WDtkrCKtWy5e',
    },
  },
  proposedEvent: {
    description:
      'The proposed event for a workflow step. The proposedEvent is optional when the businessEvent or rejection are present\n',
    type: {
      blueId: '3Xoecxdbp2YNAeFqQmdNizAeci6amtY3kLG78kaWSD3a',
    },
  },
  rejected: {
    description: 'Flags this step as rejected.',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  timestamp: {
    description:
      'The set of timestamp(s) associated with the event as a collection of [dateTime, qualifier].',
    itemType: {
      blueId: '93YHikoSQrMTBaKFsmqukjaePGjWoHkVZMZVW1k86M7d',
    },
    schema: {
      minItems: 1,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  workflowState: {
    description:
      'The event workflow information, i.e. the workflow status, the associated comment and the partyCustomisedWorkflow which purpose is to provide the ability to associate custom workflow information to the CDM.\n',
    type: {
      blueId: '6FS5LVjRjPqcC9Jv5LTu4r3Wm7MAKikZPY2uJiM4t5eA',
    },
  },
};
