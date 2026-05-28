import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmBaseDatetimeRollConventionEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/RollConventionEnum']
  )(
    z.union([
      z.literal('EOM'),
      z.literal('FRI'),
      z.literal('FRN'),
      z.literal('IMM'),
      z.literal('IMMAUD'),
      z.literal('IMMCAD'),
      z.literal('IMMNZD'),
      z.literal('MON'),
      z.literal('NONE'),
      z.literal('SAT'),
      z.literal('SFE'),
      z.literal('SUN'),
      z.literal('TBILL'),
      z.literal('THU'),
      z.literal('TUE'),
      z.literal('WED'),
      z.literal(1),
      z.literal(10),
      z.literal(11),
      z.literal(12),
      z.literal(13),
      z.literal(14),
      z.literal(15),
      z.literal(16),
      z.literal(17),
      z.literal(18),
      z.literal(19),
      z.literal(2),
      z.literal(20),
      z.literal(21),
      z.literal(22),
      z.literal(23),
      z.literal(24),
      z.literal(25),
      z.literal(26),
      z.literal(27),
      z.literal(28),
      z.literal(29),
      z.literal(3),
      z.literal(30),
      z.literal(4),
      z.literal(5),
      z.literal(6),
      z.literal(7),
      z.literal(8),
      z.literal(9),
    ]) as unknown as z.ZodObject<any>
  );

export type CdmBaseDatetimeRollConventionEnum = z.infer<
  typeof CdmBaseDatetimeRollConventionEnumSchema
>;
