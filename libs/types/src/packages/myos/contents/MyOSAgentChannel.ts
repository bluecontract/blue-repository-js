export const MyOSAgentChannel = {
  "name": "MyOS Agent Channel",
  "description": "MyOS-specific agent channel extending Channel with agent and event fields",
  "agent": {
    "type": {
      "blueId": "8DQrCT6Mf9wHQyRc4NdYhjFW4FbKi83no2QPe54UhdQ5"
    },
    "description": "Optional MyOS agent associated with this channel"
  },
  "event": {
    "description": "Optional event node reference"
  }
} as const;
