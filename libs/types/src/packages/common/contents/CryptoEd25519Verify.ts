export const CryptoEd25519Verify = {
  description:
    'Verifies an Ed25519 signature over the exact UTF-8 bytes of message.',
  message: {
    description: 'canonical UTF-8 message text',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  name: 'Crypto Ed25519 Verify',
  publicKey: {
    description: 'base64url raw 32-byte Ed25519 public key',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  signature: {
    description: 'base64url raw 64-byte Ed25519 signature',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
} as const;
