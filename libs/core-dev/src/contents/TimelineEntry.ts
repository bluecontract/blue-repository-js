export const timelineEntry = {
  name: 'Timeline Entry',
  threadPrev: {
    description: 'Previous entry in the thread',
  },
  signature: {
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  timeline: {
    description: 'Timeline this entry belongs to',
    type: {
      blueId: 'C7TsyShrDryZ121B2EJMKD9ui1ozmvTfGUkquRKkSvAP',
    },
  },
  thread: {
    description: 'Optional thread',
  },
  timelinePrev: {
    description: 'Previous entry',
  },
  message: {
    description: 'Message',
  },
} as const;
