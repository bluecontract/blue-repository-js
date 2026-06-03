export const CryptoEd25519Verify: Record<string, unknown> = {
  description:
    'Verifies an Ed25519 signature over the exact UTF-8 bytes of message.',
  message: {
    description: 'canonical UTF-8 message text',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  name: 'Crypto Ed25519 Verify',
  publicKey: {
    description: 'base64url raw 32-byte Ed25519 public key',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  signature: {
    description: 'base64url raw 64-byte Ed25519 signature',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
};
