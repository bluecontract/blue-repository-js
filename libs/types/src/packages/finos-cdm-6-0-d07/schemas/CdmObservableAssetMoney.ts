import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeFrequencySchema } from './CdmBaseDatetimeFrequency';
import { CdmBaseMathDatedValueSchema } from './CdmBaseMathDatedValue';
import { CdmBaseMathMeasureSchema } from './CdmBaseMathMeasure';
import { CdmBaseMathUnitTypeSchema } from './CdmBaseMathUnitType';

export const CdmObservableAssetMoneySchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/Money']
)(
  z.object({
    datedValue: z
      .array(z.lazy(() => CdmBaseMathDatedValueSchema))
      .min(0)
      .optional(),
    description: z.string().optional(),
    frequency: z.lazy(() => CdmBaseDatetimeFrequencySchema).optional(),
    multiplier: z.lazy(() => CdmBaseMathMeasureSchema).optional(),
    name: z.string().optional(),
    unit: z.lazy(() => CdmBaseMathUnitTypeSchema).optional(),
    val: z.number().optional(),
  })
);

export type CdmObservableAssetMoney = z.infer<
  typeof CdmObservableAssetMoneySchema
>;
