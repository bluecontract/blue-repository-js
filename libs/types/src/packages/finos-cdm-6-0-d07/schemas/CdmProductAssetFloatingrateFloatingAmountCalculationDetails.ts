import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';
import { CdmProductAssetFloatingrateFloatingRateProcessingDetailsSchema } from './CdmProductAssetFloatingrateFloatingRateProcessingDetails';
import { CdmProductAssetFloatingrateFloatingRateSettingDetailsSchema } from './CdmProductAssetFloatingrateFloatingRateSettingDetails';
import { CdmProductCommonScheduleCalculationPeriodBaseSchema } from './CdmProductCommonScheduleCalculationPeriodBase';

export const CdmProductAssetFloatingrateFloatingAmountCalculationDetailsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/asset/floatingrate/FloatingAmountCalculationDetails'
    ]
  )(
    z.object({
      appliedRate: z.number(),
      calculatedAmount: z.number(),
      calculationPeriod: z.lazy(
        () => CdmProductCommonScheduleCalculationPeriodBaseSchema
      ),
      calculationPeriodNotionalAmount: z.lazy(
        () => CdmObservableAssetMoneySchema
      ),
      description: z.string().optional(),
      floatingRate: z
        .lazy(() => CdmProductAssetFloatingrateFloatingRateSettingDetailsSchema)
        .optional(),
      name: z.string().optional(),
      processingDetails: z
        .lazy(
          () => CdmProductAssetFloatingrateFloatingRateProcessingDetailsSchema
        )
        .optional(),
      spreadExclusiveCalculatedAMount: z.number(),
      yearFraction: z.number(),
    })
  );

export type CdmProductAssetFloatingrateFloatingAmountCalculationDetails =
  z.infer<
    typeof CdmProductAssetFloatingrateFloatingAmountCalculationDetailsSchema
  >;
