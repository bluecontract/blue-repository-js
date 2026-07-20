export const MyOSSessionSubscriptionRequested: Record<string, unknown> = {
  description:
    'Request asking MyOS Admin to start a provider-mediated subscription to a logical source document. The request targets a document, not a specific session. MyOS Admin chooses an eligible session unless the matching mandate constrains one. The subscriber is inferred from the requesting document session.\n',
  filter: {
    description: 'Optional filter for the root source document.',
    type: {
      blueId: '6fj4VDzQZwkBBPsYP4DGeSPbnHCQmX11PG3Vtk9pLRMF',
    },
  },
  linkedDocuments: {
    description: 'Optional linked-document subscription rules.',
    itemType: {
      anchor: {
        description: 'Link anchor whose linked documents should be observed.',
        schema: {
          required: true,
        },
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
      },
      filter: {
        description:
          'Optional filter for linked documents under this anchor. When absent, defaults include all events and no snapshots.\n',
        type: {
          blueId: '6fj4VDzQZwkBBPsYP4DGeSPbnHCQmX11PG3Vtk9pLRMF',
        },
      },
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  name: 'MyOS Session Subscription Requested',
  sourceInitialDocument: {
    description: 'Source initial document to observe.',
    schema: {
      required: true,
    },
  },
  type: {
    blueId: '6XYXgjV6ja1oLqLCs3TWy4RP5UwmpPZKcppBfwwXcckU',
  },
};
