export const WorkerAgencyPermission = {
  name: 'Worker Agency Permission',
  permissions: {
    description:
      'The permissions granted to the worker for documents of the given type.',
    type: {
      blueId: '5cZ3J1QiMJEJV4FV5kfSkeG2oJmweWCyJo3v2TSc3Xuw',
    },
  },
  workerType: {
    description: 'The document type the worker is allowed to create.',
  },
} as const;
