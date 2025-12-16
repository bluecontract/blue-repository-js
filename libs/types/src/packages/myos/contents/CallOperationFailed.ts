export const CallOperationFailed = {
  "name": "Call Operation Failed",
  "type": {
    "blueId": "36epvrpVHZLjapbeZsNodz2NDnm7XZeNZcnkWHgkP1pp"
  },
  "description": "MyOS Admin could not invoke the requested operation.",
  "targetSessionId": {
    "type": {
      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
    },
    "description": "Target document session that was attempted."
  },
  "operation": {
    "type": {
      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
    },
    "description": "Operation name that was attempted."
  },
  "reason": {
    "type": {
      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
    },
    "description": "Failure reason code (permission_denied, execution_error, invalid_request, target_not_found)."
  }
} as const;
