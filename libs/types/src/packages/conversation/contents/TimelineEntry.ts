export const TimelineEntry = {
  "name": "Timeline Entry",
  "description": "Conversation package type. Single entry in a Timeline. Entries are hash-linked via `prevEntry`, forming a tamper-evident chain. The `message` payload is unconstrained to allow different entry kinds (chat, notices, etc.).\n",
  "timeline": {
    "type": {
      "blueId": "3Ge54FsGJaaeZmm8nTKJdS6HVdYhiR3g18fDwg3Ev1Sa"
    },
    "description": "The timeline this entry belongs to."
  },
  "prevEntry": {
    "description": "The previous entry in the timeline; omitted for the first entry."
  },
  "message": {
    "description": "Entry payload (any Blue node), e.g., Chat Message or Status Change."
  },
  "timestamp": {
    "type": {
      "blueId": "5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1"
    },
    "description": "Timestamp when the entry was created."
  },
  "actor": {
    "type": {
      "blueId": "CN5efWVizJbRsMCw8YWRfT2q9vM9XfeGDN9wFvYcvMnQ"
    },
    "description": "Actor attribution for the creator of this entry."
  }
} as const;
