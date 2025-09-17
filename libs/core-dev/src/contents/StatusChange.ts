export const statusChange = {
  name: 'Status Change',
  description:
    "An event indicating that the document's status has transitioned.",
  type: {
    blueId: '3gtD3i9bgfhDat3VB53vrQpchWFn1McYe2ngSc3YLjar',
  },
  status: {
    description: 'The new status of the document.',
    type: {
      blueId: 'HsnCTdM4Rxjp28V7yq4ezQHyRh7MJixqDKtzm3tiLbcN',
    },
  },
} as const;
