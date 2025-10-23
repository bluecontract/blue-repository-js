export const sequentialWorkflow = {
  channel: {
    description: 'Name of the channel this workflow listens to.\n',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  description:
    'A sequential workflow that executes its steps in a linear order.',
  event: {
    description:
      'Optional event-type criteria to filter incoming events from the channel.\n',
  },
  name: 'Sequential Workflow',
  steps: {
    itemType: {
      blueId: 'CvfSAWwJ4ZAMDNfum11cEcs54ECL8oszspkPKrMMY7xt',
    },
    type: {
      blueId: 'G8wmfjEqugPEEXByMYWJXiEdbLToPRWNQEekNxrxfQWB',
    },
  },
} as const;
