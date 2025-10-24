export const channel = {
  description:
    "Core type of Blue Language v1.0 (see https://language.blue).\nAbstract base for event entry points within a scope. Channels decide whether\nan incoming event matches at this scope. External channels may also use the\nscope's checkpoint to gate duplicates/stale events.\n",
  name: 'Channel',
  type: {
    blueId: 'AERp8BWnuUsjoPciAeNXuUWS9fmqPNMdWbxmKn3tcitx',
  },
} as const;
