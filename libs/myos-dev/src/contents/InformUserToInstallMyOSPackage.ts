export const informUserToInstallMyOSPackage = {
  name: 'Inform User To Install MyOS Package',
  description: 'Notifies the user that a MyOS Package is ready to install.',
  package: {
    description: 'The complete package to be bootstrapped',
    type: {
      blueId: '2yuq1Cpoe5cGoWuJAFUNuzdR5aFEqd7e4XxDBcQ8He49',
    },
  },
  title: {
    description: 'Short, user-facing headline (e.g., "Install Agent Package")',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  message: {
    description: 'Context for the user (e.g., who suggested it, what it does)',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
} as const;
