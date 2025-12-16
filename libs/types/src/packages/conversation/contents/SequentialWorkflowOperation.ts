export const SequentialWorkflowOperation = {
  "name": "Sequential Workflow Operation",
  "type": {
    "blueId": "7X3LkN54Yp88JgZbppPhP6hM3Jqiqv8Z2i4kS7phXtQe"
  },
  "description": "Conversation handler pattern for implementing an Operation as a sequential workflow. Binds to the operation’s invocation channel and runs the configured steps when the operation is called.\n",
  "operation": {
    "type": {
      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
    },
    "description": "The name of the Operation this handler implements. Must reference an Operation defined in the same scope.\n"
  }
} as const;
