export const sequentialWorkflowStep = {
  description:
    'Conversation package type. Abstract base for a single step in a Sequential Workflow. Concrete step types (e.g., JavaScript Code, Trigger Event, Update Document) refine behavior.\n',
  name: 'Sequential Workflow Step',
} as const;
