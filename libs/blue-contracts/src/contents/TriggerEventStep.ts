export const triggerEventStep = {
  name: 'Trigger Event Step',
  description:
    'A specialized workflow step designed to generate and emit a specific event. \n',
  type: {
    blueId: 'H5YcJM1fBf57BjYjc7hXbotGh5RuD8bwXLTVY4PA353u',
  },
  event: {
    description:
      'Defines the event to be triggered. \n\nImportant: Any ${} expressions within the event object will be evaluated \nat runtime. The actual triggered event will contain the evaluated values, \nnot the raw template expressions.',
  },
} as const;
