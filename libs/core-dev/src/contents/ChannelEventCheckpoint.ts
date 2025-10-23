export const channelEventCheckpoint = {
  description:
    'A processing checkpoint that records the BlueId of the last processed event from each channel. Provides exact tracking of which events were processed, works reliably across decentralized processors, and supports multi-channel documents with independent event streams.',
  lastEvents: {
    description:
      "Maps channel names to their last processed event information. Each channel tracks the BlueId of the most recent event that has been successfully processed from that channel's timeline.",
    keyType: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
    type: {
      blueId: '294NBTj2mFRL3RB4kDRUSckwGg7Kzj6T8CTAFeR1kcSA',
    },
  },
  name: 'Channel Event Checkpoint',
} as const;
