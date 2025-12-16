export const CallOperationAccepted = {
  "name": "Call Operation Accepted",
  "type": {
    "blueId": "36epvrpVHZLjapbeZsNodz2NDnm7XZeNZcnkWHgkP1pp"
  },
  "description": "MyOS Admin accepted the call and submitted the operation request.",
  "targetSessionId": {
    "type": {
      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
    },
    "description": "Target document session that received the request."
  },
  "operation": {
    "type": {
      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
    },
    "description": "Operation name that was invoked."
  }
} as const;
