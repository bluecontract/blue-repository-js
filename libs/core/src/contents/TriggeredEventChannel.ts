export const triggeredEventChannel = {
  description:
    "Core type of Blue Language v1.0 (see https://language.blue).\nDelivers events previously enqueued by handlers into the scope's FIFO.\nOne drain per scope at the end of scope processing; never drains during cascades.\n",
  name: 'Triggered Event Channel',
  type: {
    blueId: 'EF9xc9RMMXusRaumQebVUUhwtp1Do6QBYYo6URRhg2yv',
  },
} as const;
