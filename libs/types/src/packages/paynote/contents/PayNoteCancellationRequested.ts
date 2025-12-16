export const PayNoteCancellationRequested = {
  "name": "PayNote Cancellation Requested",
  "type": {
    "blueId": "8f9UhHMbRe62sFgzQVheToaJPYi7t7HPNVvpQTbqfL5n"
  },
  "description": "The Payer requests to cancel PayNote that is Approved but not yet\nReserved or Captured.\n",
  "childPayNote": {
    "description": "Complete PayNote"
  }
} as const;
