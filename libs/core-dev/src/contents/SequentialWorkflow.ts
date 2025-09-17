export const sequentialWorkflow = {
  name: 'Sequential Workflow',
  description:
    'A sequential workflow is a workflow that executes its steps in a linear, sequential manner.',
  channel: {
    description:
      'Specifies the channel that this sequential workflow listens to for triggering\nexecution. If omitted, the workflow implicitly listens to the `Internal Events Channel`\nfor internal events.\n',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  event: {
    description:
      'Optional event type criteria used to filter incoming events from the channel.\nIf specified, only events matching this specification will trigger the workflow\nexecution. If omitted, all events from the channel will trigger the workflow.\n',
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
