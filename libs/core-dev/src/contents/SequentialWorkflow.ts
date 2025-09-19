export const sequentialWorkflow = {
  name: 'Sequential Workflow',
  description:
    'A sequential workflow that executes its steps in a linear order.',
  channel: {
    description: 'Name of the channel this workflow listens to.\n',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  event: {
    description:
      'Optional event-type criteria to filter incoming events from the channel.\n',
  },
  steps: {
    type: {
      blueId: 'G8wmfjEqugPEEXByMYWJXiEdbLToPRWNQEekNxrxfQWB',
    },
    itemType: {
      blueId: 'CvfSAWwJ4ZAMDNfum11cEcs54ECL8oszspkPKrMMY7xt',
    },
  },
} as const;
