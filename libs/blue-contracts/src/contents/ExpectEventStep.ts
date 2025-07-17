export const expectEventStep = {
  name: 'Expect Event Step',
  description:
    "A specialized workflow step designed to wait for and process a specific event. \nThis step acts as a gatekeeper, allowing the workflow to pause until a \nparticular event occurs, then facilitating the event's progression through \nsubsequent workflow steps.\n",
  type: {
    blueId: 'H5YcJM1fBf57BjYjc7hXbotGh5RuD8bwXLTVY4PA353u',
  },
  event: {
    description:
      'Defines the expected event characteristics. This object specifies the \ncriteria that an incoming event must meet to be considered a match and \ntrigger the continuation of the workflow.\n\nImportant: Any ${} expressions within the event object will be evaluated \nat runtime. The incoming event will be compared against this evaluated \nversion of the criteria, not the raw template.',
  },
} as const;
