export const CdmEventWorkflowWorkflowState: Record<string, unknown> = {
  comment: {
    description:
      'A comment field to be associated with the workflow, e.g. to specify why a transaction event was rejected by a party.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  description:
    'A class to specify workflow information, which is conceptually applicable to all lifecycle events.',
  name: 'cdm/event/workflow/WorkflowState',
  partyCustomisedWorkflow: {
    description:
      'Workflow data that is specific to certain market participants and is expressed as part of the CDM in a very generic manner, which can be party-specific. The initial use cases have been derived from the CME clearing and the DTCC TIW submissions.\n',
    itemType: {
      blueId: 'HL2ZcMwczuHgPoUL75nm9XG9rZy6XeFMmzGuuWfqxkya',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  warehouseIdentity: {
    description:
      'The identity of the warehouse, if any, that is executing that workflow step.',
    type: {
      blueId: '6exizYh6WdJdboTXU5vG7ZycT7oysGTNWCBaBzuWkBBs',
    },
  },
  workflowStatus: {
    description: 'The workflow status indicator, e.g. Accepted, Rejected, ...',
    schema: {
      required: true,
    },
    type: {
      blueId: 'BvJRype2zWVijuwSinejW5FK4QMppv6EphZ6CPresR4s',
    },
  },
};
