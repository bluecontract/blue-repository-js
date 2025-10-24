export const informUserToInstallMyOSPackage = {
  description: 'Notifies the user that a MyOS Package is ready to install.',
  message: {
    description: 'Context for the user (e.g., who suggested it, what it does)',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  name: 'Inform User To Install MyOS Package',
  package: {
    description: 'The complete package to be bootstrapped',
    type: {
      blueId: '4JZkLj81pErAeTvHxtp9oAYraKhisybdPuzbTv2mkd5v',
    },
  },
  title: {
    description: 'Short, user-facing headline (e.g., "Install Agent Package")',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
} as const;
