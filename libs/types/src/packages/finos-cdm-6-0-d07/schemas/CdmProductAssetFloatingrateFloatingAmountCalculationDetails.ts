import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';
import { CdmProductAssetFloatingrateFloatingRateProcessingDetailsSchema } from './CdmProductAssetFloatingrateFloatingRateProcessingDetails';
import { CdmProductAssetFloatingrateFloatingRateSettingDetailsSchema } from './CdmProductAssetFloatingrateFloatingRateSettingDetails';
import { CdmProductCommonScheduleCalculationPeriodBaseSchema } from './CdmProductCommonScheduleCalculationPeriodBase';

const zod = z as any;

export const CdmProductAssetFloatingrateFloatingAmountCalculationDetailsSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/asset/floatingrate/FloatingAmountCalculationDetails'
    ]
  )(
    zod.object({
      appliedRate: zod.number(),
      calculatedAmount: zod.number(),
      calculationPeriod: zod.lazy(
        () => CdmProductCommonScheduleCalculationPeriodBaseSchema
      ),
      calculationPeriodNotionalAmount: zod.lazy(
        () => CdmObservableAssetMoneySchema
      ),
      description: zod.string().optional(),
      floatingRate: zod
        .lazy(() => CdmProductAssetFloatingrateFloatingRateSettingDetailsSchema)
        .optional(),
      name: zod.string().optional(),
      processingDetails: zod
        .lazy(
          () => CdmProductAssetFloatingrateFloatingRateProcessingDetailsSchema
        )
        .optional(),
      spreadExclusiveCalculatedAMount: zod.number(),
      yearFraction: zod.number(),
    })
  );

export type CdmProductAssetFloatingrateFloatingAmountCalculationDetails =
  z.infer<
    typeof CdmProductAssetFloatingrateFloatingAmountCalculationDetailsSchema
  >;
