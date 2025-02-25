import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';

export const SchnorrSignatureAlgorithmOverTheEllipticCurveSecp256k1Schema =
  withTypeBlueId(
    blueIds.SchnorrSignatureAlgorithmOverTheEllipticCurveSecp256k1
  )(
    z.object({
      name: z.string().optional(),
      publicKey: z.string().optional(),
    })
  );

export type SchnorrSignatureAlgorithmOverTheEllipticCurveSecp256k1 = z.infer<
  typeof SchnorrSignatureAlgorithmOverTheEllipticCurveSecp256k1Schema
>;
