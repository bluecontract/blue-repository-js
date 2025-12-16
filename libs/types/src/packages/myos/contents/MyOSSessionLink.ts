export const MyOSSessionLink = {
  "name": "MyOS Session Link",
  "type": {
    "blueId": "D2ERUvbpn6R6PR7hjFsGofwQsu9bkRfc6wbSYHcfJtMD"
  },
  "description": "Link targeting a specific document session by its sessionId. Use when referencing a live session rather than a logical document.",
  "sessionId": {
    "type": {
      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
    },
    "description": "Identifier of the document session being targeted."
  }
} as const;
