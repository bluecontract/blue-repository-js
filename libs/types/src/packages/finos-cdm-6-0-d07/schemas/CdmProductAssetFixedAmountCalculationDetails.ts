import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';
import { CdmProductCommonScheduleCalculationPeriodBaseSchema } from './CdmProductCommonScheduleCalculationPeriodBase';

export const CdmProductAssetFixedAmountCalculationDetailsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/FixedAmountCalculationDetails']
  )(
    z.object({
      calculatedAmount: z.number(),
      calculationPeriod: z.lazy(
        () => CdmProductCommonScheduleCalculationPeriodBaseSchema
      ),
      calculationPeriodNotionalAmount: z.lazy(
        () => CdmObservableAssetMoneySchema
      ),
      description: z.string().optional(),
      fixedRate: z.number(),
      name: z.string().optional(),
      yearFraction: z.number(),
    })
  );

export type CdmProductAssetFixedAmountCalculationDetails = z.infer<
  typeof CdmProductAssetFixedAmountCalculationDetailsSchema
>;
