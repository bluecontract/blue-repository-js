export const CdmObservableEventTrigger = {
  creditEvents: {
    type: {
      blueId: 'HWbAdp28QNY1ehyUyubaSbcB8FhMbDv3qp7poZxNn9mM',
    },
  },
  creditEventsReference: {
    type: {
      blueId: '7nuxJCjc51f4w1EhUb9R9P4L5uBQELSPjqdBhMothJ2G',
    },
  },
  description: 'Trigger point at which feature is effective.',
  level: {
    description: 'The trigger level.',
    itemType: {
      blueId: '7ujhwBZKKYZ8KFEFNUSPTPcy8E1hFRJJzhgaX3ZgJGY5',
    },
    schema: {
      maxItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 2,
      },
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 0,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  name: 'cdm/observable/event/Trigger',
  triggerTimeType: {
    description: 'The valuation time type of knock condition.',
    type: {
      blueId: 'BDRmKW7BVJYNZXDyKP5S625t8NyJmgQDWfRw8Mjzizgd',
    },
  },
  triggerType: {
    description: 'The Triggering condition.',
    type: {
      blueId: 'EQg8oK2XCYwAPXBQbQ25PHut48x4LXJQsYqgXoaEtcRq',
    },
  },
} as const;
