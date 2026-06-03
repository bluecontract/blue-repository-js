import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CryptoEd25519VerifySchema: any = withTypeBlueId(
  blueIds['Common/Crypto Ed25519 Verify']
)(
  zod.object({
    description: zod.string().optional(),
    message: zod.string().optional(),
    name: zod.string().optional(),
    publicKey: zod.string().optional(),
    signature: zod.string().optional(),
  })
);

export type CryptoEd25519Verify = z.infer<typeof CryptoEd25519VerifySchema>;
