export const CdmEventWorkflowWorkflowStep: Record<string, unknown> = {
  account: {
    description:
      'Optional account information that could be associated to the event.',
    itemType: {
      blueId: 'HCfJUUx9k8N8QqUgtRQZDaSkcsnmcWrN6CsVeT5ViMfM',
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
      blueId: 'DW7rU2G1aVFJWe4AguEb2Usk8YfFAXvUzqiNDKzFurHz',
    },
  },
  approval: {
    description:
      'Optional party approvals for the current workflow step. A workflow step can have any number of parties associated to it, thus this object is represented as a list. All parties that are expected to provide approval should have an item in this list that references them.\n',
    itemType: {
      blueId: '3hc2fs3hNHSJTJ1K3BXvZXCq4XHj7rRGhvfo62XddQin',
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
      blueId: 'EhgUPTjNky8ntLuNCUAumwbyM9VxFbf2HcZ4Pkp2cfsM',
    },
  },
  counterpartyPositionBusinessEvent: {
    description: 'Documents the life cycle event for a position.',
    type: {
      blueId: 'HmAtnSZuDe4ifp5cQh4JwWZmz7AEJjddmWkQ7QEmTjEv',
    },
  },
  creditLimitInformation: {
    type: {
      blueId: '5MhstayLq1JLa2NHwkVTfhEPNG54pMxBdyN7fZ7dzvx6',
    },
  },
  description:
    'A workflow step represents the state of a business event. The workflow step contains a reference to a previous WorkflowStep in order to preserve lineage. A workflow step is accepted if it contains a business event, proposed if proposedEvent is present and is rejected if the rejected flag is set.\n',
  eventIdentifier: {
    description:
      'The identifier(s) that uniquely identify a lifecycle event. The unbounded cardinality is meant to provide the ability to associate identifiers that are issued by distinct parties. As an example, each of the parties to the event may choose to associate their own identifiers to the event.\n',
    itemType: {
      blueId: '9tpFoqFu1yX5LZEATGF8CYsE5VSXhkQua9LMXwLEX2Pv',
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
      blueId: 'AU5SZ3DHqRdpqT1JPJ9S96fTUWv7kU2ofDC4zNRK6quM',
    },
  },
  messageInformation: {
    description:
      'Contains all information pertaining the FpML messaging header',
    type: {
      blueId: '98dPVuFQFzp6TPmhAh6zjz4zFp8sdg597uHrfF3ztLkP',
    },
  },
  name: 'cdm/event/workflow/WorkflowStep',
  nextEvent: {
    description:
      'The intended next event can be specified, even if the instructions are not known yet.',
    type: {
      blueId: 'A1jYzNcEp75NaNXNyvEb5S2noXSa3PnFck4qj5Cdvuvs',
    },
  },
  party: {
    description:
      'The specification of the event parties. This attribute is optional, as not applicable to certain events (e.g. most of the observations).\n',
    itemType: {
      blueId: '3skPfLDtYJ59SZAAdcu2JDHySdtCEVu8FzTnUX8D5mfy',
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
      blueId: 'A1jYzNcEp75NaNXNyvEb5S2noXSa3PnFck4qj5Cdvuvs',
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
      blueId: 'DSJDCMX9fWnAZqseXHzuc3NWEvtct9Ay1D8XqV7Cz8sb',
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
      blueId: 'GZHhbuAMJUxPqZ627VF6tcc7Jky7YaBT1ctEWpw3De4m',
    },
  },
};
