import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimePeriodExtendedEnumSchema } from './CdmBaseDatetimePeriodExtendedEnum';
import { CdmBaseDatetimeRollConventionEnumSchema } from './CdmBaseDatetimeRollConventionEnum';

const zod = z as any;

export const CdmBaseDatetimeCalculationPeriodFrequencySchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/CalculationPeriodFrequency']
  )(
    zod.object({
      balanceOfFirstPeriod: zod.boolean().optional(),
      description: zod.string().optional(),
      name: zod.string().optional(),
      period: zod
        .lazy(() => CdmBaseDatetimePeriodExtendedEnumSchema)
        .optional(),
      periodMultiplier: zod.number().optional(),
      rollConvention: zod.lazy(() => CdmBaseDatetimeRollConventionEnumSchema),
    })
  );

export type CdmBaseDatetimeCalculationPeriodFrequency = z.infer<
  typeof CdmBaseDatetimeCalculationPeriodFrequencySchema
>;
