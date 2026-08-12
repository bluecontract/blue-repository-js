import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';
import { CdmProductCommonScheduleCalculationPeriodBaseSchema } from './CdmProductCommonScheduleCalculationPeriodBase';

const zod = z as any;

export const CdmProductAssetFixedAmountCalculationDetailsSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/FixedAmountCalculationDetails']
  )(
    zod.object({
      calculatedAmount: zod.number(),
      calculationPeriod: zod.lazy(
        () => CdmProductCommonScheduleCalculationPeriodBaseSchema
      ),
      calculationPeriodNotionalAmount: zod.lazy(
        () => CdmObservableAssetMoneySchema
      ),
      description: zod.string().optional(),
      fixedRate: zod.number(),
      name: zod.string().optional(),
      yearFraction: zod.number(),
    })
  );

export type CdmProductAssetFixedAmountCalculationDetails = z.infer<
  typeof CdmProductAssetFixedAmountCalculationDetailsSchema
>;
