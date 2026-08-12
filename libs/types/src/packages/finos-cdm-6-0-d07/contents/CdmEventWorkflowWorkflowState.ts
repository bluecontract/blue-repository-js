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
      blueId: 'CwZCsRkBByBtLTC63kaBcjcNDQKK1hV2Mnh42XUhafmm',
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
      blueId: 'A1oVS1sh8n5WgZyH6sTQy19sNHZuLmWHHBGQLvN4s1Xq',
    },
  },
  workflowStatus: {
    description: 'The workflow status indicator, e.g. Accepted, Rejected, ...',
    schema: {
      required: true,
    },
    type: {
      blueId: '5dZPU8bHyFfAju8bde9s3C64P7cYcu2c4awm2CKzJfmY',
    },
  },
};
