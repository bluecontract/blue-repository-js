export const workerAgencyPermission = {
  name: 'Worker Agency Permission',
  permissions: {
    description:
      'The permissions granted to the worker for documents of the given type.',
    type: {
      blueId: 'DRDQcve5AjwBK9z6Njfa4MNERko7Uf4ucvARFdC6sL54',
    },
  },
  workerType: {
    description: 'The document type the worker is allowed to create.',
  },
} as const;
