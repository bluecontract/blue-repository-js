import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CryptoEd25519VerifySchema = withTypeBlueId(
  blueIds['Common/Crypto Ed25519 Verify']
)(
  z.object({
    description: z.string().optional(),
    message: z.string().optional(),
    name: z.string().optional(),
    publicKey: z.string().optional(),
    signature: z.string().optional(),
  })
);

export type CryptoEd25519Verify = z.infer<typeof CryptoEd25519VerifySchema>;
