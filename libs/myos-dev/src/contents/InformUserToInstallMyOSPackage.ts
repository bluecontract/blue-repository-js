export const informUserToInstallMyOSPackage = {
  description: 'Notifies the user that a MyOS Package is ready to install.',
  message: {
    description: 'Context for the user (e.g., who suggested it, what it does)',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  name: 'Inform User To Install MyOS Package',
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
} as const;
