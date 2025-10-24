export const handler = {
  channel: {
    description:
      'The contracts-map key of the channel this handler binds to (same scope).',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  description:
    'Core type of Blue Language v1.0 (see https://language.blue).\nAbstract base for logic bound to exactly one channel (same scope). At runtime,\na handler may: (1) apply patches (list of Json Patch Entry), (2) emit events,\n(3) consume gas via consumeGas(units: Integer), and (4) terminate.\n',
  event: {
    description:
      "Optional matcher payload used by the handler's processor to further restrict events.",
  },
  name: 'Handler',
  type: {
    blueId: 'AERp8BWnuUsjoPciAeNXuUWS9fmqPNMdWbxmKn3tcitx',
  },
} as const;
