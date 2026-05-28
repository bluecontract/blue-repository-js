export const CdmEventWorkflowWorkflowStep = {
  account: {
    description:
      'Optional account information that could be associated to the event.',
    itemType: {
      blueId: '2redquTFoM18tjds3NfGQwUYCvsE2KxUExBUqKyf3rJX',
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
  action: {
    description:
      'Specifies whether the event is a new, a correction or a cancellation.',
    type: {
      blueId: 'FZv8rcp2vixvrFz76oD9XQQi3AkBXSWz2YSBg7zgTZbx',
    },
  },
  approval: {
    description:
      'Optional party approvals for the current workflow step. A workflow step can have any number of parties associated to it, thus this object is represented as a list. All parties that are expected to provide approval should have an item in this list that references them.\n',
    itemType: {
      blueId: 'G4jFdkwRjRnQEpGMrZtySGdPr3tRWJd7bh65nxK1Pp8N',
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
  businessEvent: {
    description:
      'Life cycle event for the step. The businessEvent is optional when a proposedEvent or rejection are present.',
    type: {
      blueId: '8qWdT3E5NidUckPJrWGmAnsexmocYp7EofAQ2FAmaTPs',
    },
  },
  counterpartyPositionBusinessEvent: {
    description: 'Documents the life cycle event for a position.',
    type: {
      blueId: 'Gm1bbskyhwzzc6X2nYgZ7F5WWwWhBVgSMLYpJsp7y8PY',
    },
  },
  creditLimitInformation: {
    type: {
      blueId: 'EUhKix96qBRpb8cnMTF8gcMWJy2C8uLuSVgDDmiWB82j',
    },
  },
  description:
    'A workflow step represents the state of a business event. The workflow step contains a reference to a previous WorkflowStep in order to preserve lineage. A workflow step is accepted if it contains a business event, proposed if proposedEvent is present and is rejected if the rejected flag is set.\n',
  eventIdentifier: {
    description:
      'The identifier(s) that uniquely identify a lifecycle event. The unbounded cardinality is meant to provide the ability to associate identifiers that are issued by distinct parties. As an example, each of the parties to the event may choose to associate their own identifiers to the event.\n',
    itemType: {
      blueId: '8eDineGwQr2VXBeVEPbnJZvEcNhDbLu8HtmubDT6RBoZ',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 1,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  lineage: {
    description:
      'The lineage attribute provides a linkage among lifecycle events through the globalKey hash value. One example is when a given lifecycle event is being corrected or cancelled. In such case, each subsequent event will have lineage into the prior version of that event. The second broad use case is when an event has a dependency upon either another event (e.g. the regular payment associated with a fix/float swap will have a lineage into the reset event, which will in turn have a lineage into the observation event for the floating rate and the contract) or a contract (e.g. the exercise of an option has a lineage into that option).\n',
    type: {
      blueId: 'BSWGnuEuyVaWENR6s4Aj98zry3uTZBX1uQHBAwY83v16',
    },
  },
  messageInformation: {
    description:
      'Contains all information pertaining the FpML messaging header',
    type: {
      blueId: 'AqS1brpf2w2Q425LEFsrQQKPZHrParp6fMbzm7hy1cqV',
    },
  },
  name: 'cdm/event/workflow/WorkflowStep',
  nextEvent: {
    description:
      'The intended next event can be specified, even if the instructions are not known yet.',
    type: {
      blueId: '8miTVbK5NJxxVBWQ7jeftLfg8P7YfMa3Ksi8a3XDJJ6',
    },
  },
  party: {
    description:
      'The specification of the event parties. This attribute is optional, as not applicable to certain events (e.g. most of the observations).\n',
    itemType: {
      blueId: '694bqGLce4g9XrBubcFXs81gNNsvVTGK3msPSdNsj5jD',
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
  previousWorkflowStep: {
    description:
      'Optional previous workflow step that provides lineage to workflow steps that precedes it.',
    type: {
      blueId: '6HKfs5P29obpmgCujF88CdGns3p8Udb8sHA6m99noVZw',
    },
  },
  proposedEvent: {
    description:
      'The proposed event for a workflow step. The proposedEvent is optional when the businessEvent or rejection are present\n',
    type: {
      blueId: '8miTVbK5NJxxVBWQ7jeftLfg8P7YfMa3Ksi8a3XDJJ6',
    },
  },
  rejected: {
    description: 'Flags this step as rejected.',
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  timestamp: {
    description:
      'The set of timestamp(s) associated with the event as a collection of [dateTime, qualifier].',
    itemType: {
      blueId: '29Bam3D6qfaY6wWG9a8BVSCbVzvz6r97xkbk4nU7aU7U',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 1,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  workflowState: {
    description:
      'The event workflow information, i.e. the workflow status, the associated comment and the partyCustomisedWorkflow which purpose is to provide the ability to associate custom workflow information to the CDM.\n',
    type: {
      blueId: 'FjbFhrFxtxs3sDqZwM29eQWswygXu1ogCT2Pi2U4mQRp',
    },
  },
} as const;
