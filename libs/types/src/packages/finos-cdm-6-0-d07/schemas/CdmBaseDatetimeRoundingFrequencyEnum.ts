import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmBaseDatetimeRoundingFrequencyEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/RoundingFrequencyEnum']
  )(
    z.enum(['Daily', 'PeriodEnd'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmBaseDatetimeRoundingFrequencyEnum = z.infer<
  typeof CdmBaseDatetimeRoundingFrequencyEnumSchema
>;
