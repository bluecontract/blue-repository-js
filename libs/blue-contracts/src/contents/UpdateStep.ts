export const updateStep = {
  name: 'Update Step',
  description:
    'A specialized workflow step responsible for executing changes to the contract. \nThis is the sole step type authorized to modify contract content.\n',
  type: {
    blueId: 'H5YcJM1fBf57BjYjc7hXbotGh5RuD8bwXLTVY4PA353u',
  },
  changeset: {
    description:
      "An ordered list of JSON Patch operations to be applied sequentially.\nEach operation modifies the contract's content atomically.",
    type: {
      blueId: 'G8wmfjEqugPEEXByMYWJXiEdbLToPRWNQEekNxrxfQWB',
    },
    itemType: {
      blueId: 'EnUQeMiMa2wHFW3JbeSPvdgfpL6qZYCR29m3SfeHsKSY',
    },
  },
} as const;
