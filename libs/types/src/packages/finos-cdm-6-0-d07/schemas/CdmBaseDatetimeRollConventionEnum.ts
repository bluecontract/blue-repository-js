import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmBaseDatetimeRollConventionEnumSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/RollConventionEnum']
)(
  zod.union([
    zod.literal('EOM'),
    zod.literal('FRI'),
    zod.literal('FRN'),
    zod.literal('IMM'),
    zod.literal('IMMAUD'),
    zod.literal('IMMCAD'),
    zod.literal('IMMNZD'),
    zod.literal('MON'),
    zod.literal('NONE'),
    zod.literal('SAT'),
    zod.literal('SFE'),
    zod.literal('SUN'),
    zod.literal('TBILL'),
    zod.literal('THU'),
    zod.literal('TUE'),
    zod.literal('WED'),
    zod.literal(1),
    zod.literal(10),
    zod.literal(11),
    zod.literal(12),
    zod.literal(13),
    zod.literal(14),
    zod.literal(15),
    zod.literal(16),
    zod.literal(17),
    zod.literal(18),
    zod.literal(19),
    zod.literal(2),
    zod.literal(20),
    zod.literal(21),
    zod.literal(22),
    zod.literal(23),
    zod.literal(24),
    zod.literal(25),
    zod.literal(26),
    zod.literal(27),
    zod.literal(28),
    zod.literal(29),
    zod.literal(3),
    zod.literal(30),
    zod.literal(4),
    zod.literal(5),
    zod.literal(6),
    zod.literal(7),
    zod.literal(8),
    zod.literal(9),
  ]) as unknown as z.ZodObject<any>
);

export type CdmBaseDatetimeRollConventionEnum = z.infer<
  typeof CdmBaseDatetimeRollConventionEnumSchema
>;
