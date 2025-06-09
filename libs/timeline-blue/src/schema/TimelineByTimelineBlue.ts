import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { InitialTimelineMessageSchema } from '@blue-repository/blue-contracts';
import { SchnorrSignatureAlgorithmOverTheEllipticCurveSecp256k1Schema } from './SchnorrSignatureAlgorithmOverTheEllipticCurveSecp256k1';

export const TimelineByTimelineBlueSchema = withTypeBlueId(
  blueIds['Timeline by Timeline.blue']
)(
  InitialTimelineMessageSchema.extend({
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
