export const PayNote = {
  "name": "PayNote",
  "description": "A verifiable instrument for managing a commitment of value between a Payer, Payee, and Guarantor.",
  "status": {
    "description": "The current state of the PayNote (e.g., Pending, Approved, Reserved, Captured, Released, Rejected).",
    "type": {
      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
    },
    "value": "Pending"
  },
  "currency": {
    "description": "The ISO 4217 currency code for the transaction.",
    "type": {
      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
    }
  },
  "amount": {
    "description": "The amounts associated with this PayNote.",
    "total": {
      "description": "The maximum total value of this PayNote.",
      "type": {
        "blueId": "5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1"
      }
    },
    "reserved": {
      "description": "The amount currently reserved by the Guarantor.",
      "type": {
        "blueId": "5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1"
      },
      "value": 0
    },
    "captured": {
      "description": "The amount that has been successfully captured.",
      "type": {
        "blueId": "5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1"
      },
      "value": 0
    }
  },
  "payNoteInitialStateDescription": {
    "summary": {
      "type": {
        "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
      },
      "description": "General information about the PayNote. It should capture the most important\ninformation, most critical or non-standard elements should be covered here.\nMarkdown format suggested.\n"
    },
    "details": {
      "type": {
        "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
      },
      "description": "Complete text description of the PayNote, with everything significant explained.\nMarkdown format suggested.\n"
    }
  },
  "contracts": {
    "payerChannel": {
      "type": {
        "blueId": "EvuCWsG1E6WJQg8QXmk6rwMANYTZjoLWVZ1vYQWUwdTH"
      }
    },
    "payeeChannel": {
      "type": {
        "blueId": "EvuCWsG1E6WJQg8QXmk6rwMANYTZjoLWVZ1vYQWUwdTH"
      }
    },
    "guarantorChannel": {
      "type": {
        "blueId": "EvuCWsG1E6WJQg8QXmk6rwMANYTZjoLWVZ1vYQWUwdTH"
      }
    }
  }
} as const;
