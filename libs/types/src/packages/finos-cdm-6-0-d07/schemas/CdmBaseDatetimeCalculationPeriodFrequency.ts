import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimePeriodExtendedEnumSchema } from './CdmBaseDatetimePeriodExtendedEnum';
import { CdmBaseDatetimeRollConventionEnumSchema } from './CdmBaseDatetimeRollConventionEnum';

export const CdmBaseDatetimeCalculationPeriodFrequencySchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/CalculationPeriodFrequency']
  )(
    z.object({
      balanceOfFirstPeriod: z.boolean().optional(),
      description: z.string().optional(),
      name: z.string().optional(),
      period: z.lazy(() => CdmBaseDatetimePeriodExtendedEnumSchema).optional(),
      periodMultiplier: z.number().optional(),
      rollConvention: z.lazy(() => CdmBaseDatetimeRollConventionEnumSchema),
    })
  );

export type CdmBaseDatetimeCalculationPeriodFrequency = z.infer<
  typeof CdmBaseDatetimeCalculationPeriodFrequencySchema
>;
