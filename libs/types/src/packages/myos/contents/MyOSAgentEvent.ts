export const MyOSAgentEvent = {
  "name": "MyOS Agent Event",
  "description": "MyOS-specific agent event with agent ID, timestamp, and event data",
  "agentId": {
    "type": {
      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
    },
    "description": "Optional agent identifier"
  },
  "id": {
    "type": {
      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
    },
    "description": "Optional event ID"
  },
  "timestamp": {
    "type": {
      "blueId": "5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1"
    },
    "description": "Optional timestamp for the event"
  },
  "event": {
    "description": "Optional event node reference"
  }
} as const;
