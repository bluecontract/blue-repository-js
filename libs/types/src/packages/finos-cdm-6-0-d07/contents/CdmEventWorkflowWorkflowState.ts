export const CdmEventWorkflowWorkflowState = {
  comment: {
    description:
      'A comment field to be associated with the workflow, e.g. to specify why a transaction event was rejected by a party.\n',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  description:
    'A class to specify workflow information, which is conceptually applicable to all lifecycle events.',
  name: 'cdm/event/workflow/WorkflowState',
  partyCustomisedWorkflow: {
    description:
      'Workflow data that is specific to certain market participants and is expressed as part of the CDM in a very generic manner, which can be party-specific. The initial use cases have been derived from the CME clearing and the DTCC TIW submissions.\n',
    itemType: {
      blueId: 'FmwzzAFmqGuCenMT7mzAuGYDNJaYPsnDg5cWKFkHnjwL',
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
  warehouseIdentity: {
    description:
      'The identity of the warehouse, if any, that is executing that workflow step.',
    type: {
      blueId: '98XAqUNzZkNVqqaqfN3uL863kyUvoPoeaj1C6t8TcBcc',
    },
  },
  workflowStatus: {
    description: 'The workflow status indicator, e.g. Accepted, Rejected, ...',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'Cqsvhr2yBW9tghAQNKR3XDYzG1BtRFwCBgpQ7zz5iuXo',
    },
  },
} as const;
