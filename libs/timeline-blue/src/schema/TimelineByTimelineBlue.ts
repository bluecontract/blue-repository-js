import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';
import { SchnorrSignatureAlgorithmOverTheEllipticCurveSecp256k1Schema } from './SchnorrSignatureAlgorithmOverTheEllipticCurveSecp256k1';

export const TimelineByTimelineBlueSchema = withTypeBlueId(
  blueIds.TimelineByTimelineBlue
)(
  z.object({
    name: z.string().optional(),
    timelineAlias: z.string().optional(),
    website: z.string().optional(),
    phone: z.string().optional(),
    about: z.string().optional(),
    avatar: z.string().optional(),
    instagram: z.string().optional(),
    signingMethod:
      SchnorrSignatureAlgorithmOverTheEllipticCurveSecp256k1Schema.optional(),
    email: z.string().optional(),
  })
);

export type TimelineByTimelineBlue = z.infer<
  typeof TimelineByTimelineBlueSchema
>;
