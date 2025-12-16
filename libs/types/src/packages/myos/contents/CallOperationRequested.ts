export const CallOperationRequested = {
  "name": "Call Operation Requested",
  "type": {
    "blueId": "8f9UhHMbRe62sFgzQVheToaJPYi7t7HPNVvpQTbqfL5n"
  },
  "description": "Document asks MyOS Admin to invoke an operation on a target session.",
  "onBehalfOf": {
    "type": {
      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
    },
    "description": "Channel whose binding provides the requester account."
  },
  "targetSessionId": {
    "type": {
      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
    },
    "description": "Target document session to invoke."
  },
  "operation": {
    "type": {
      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
    },
    "description": "Operation name to invoke."
  },
  "request": {
    "description": "Payload forwarded to the target operation."
  }
} as const;
