import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-company/language';

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
