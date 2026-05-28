export const Response = {
  description:
    'Base event type for a response to a prior Request. A Response links back to the request it answers through the\n`inResponseTo` correlation object. This lets documents match an asynchronous answer to the original action, detect\nstale or duplicate responses, and keep audit trails across multiple participants and timelines.\n\nThe correlation should include at least the original requestId, and may include the incoming event or a reference to it\nwhen the whole workflow was triggered by another event. The response payload is defined by concrete response subtypes,\nsuch as Customer Action Responded, Document Bootstrap Completed, or Document Bootstrap Failed.\n\nResponse is not a guarantee that the requested action succeeded. It only says this event is semantically an answer to a\nrequest. Concrete response fields and type names must indicate whether the result was successful, failed, partial,\nrejected, or still pending.\n',
  inResponseTo: {
    type: {
      description:
        'A structured reference linking this response back to the original action and trigger.',
      incomingEvent: {
        description:
          'An event which initiated the entire workflow. Normally just blueId of it.',
      },
      name: 'Correlation',
      requestId: {
        description:
          "The 'requestId' from the specific Request event this is a response to.",
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
      },
    },
  },
  name: 'Response',
  type: {
    blueId: '7ugyHm8fpgvQx6pbLcW8cRNLBVDBExCp2iSYgd82ak6z',
  },
} as const;
