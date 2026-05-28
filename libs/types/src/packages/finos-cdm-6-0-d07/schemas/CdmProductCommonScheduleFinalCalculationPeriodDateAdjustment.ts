import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeBusinessDayConventionEnumSchema } from './CdmBaseDatetimeBusinessDayConventionEnum';
import { CdmBaseDatetimeMetafieldsReferenceWithMetaAdjustableOrRelativeDatesSchema } from './CdmBaseDatetimeMetafieldsReferenceWithMetaAdjustableOrRelativeDates';
import { CdmProductAssetMetafieldsReferenceWithMetaInterestRatePayoutSchema } from './CdmProductAssetMetafieldsReferenceWithMetaInterestRatePayout';

export const CdmProductCommonScheduleFinalCalculationPeriodDateAdjustmentSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/schedule/FinalCalculationPeriodDateAdjustment'
    ]
  )(
    z.object({
      businessDayConvention: z.lazy(
        () => CdmBaseDatetimeBusinessDayConventionEnumSchema
      ),
      description: z.string().optional(),
      name: z.string().optional(),
      relevantUnderlyingDateReference: z.lazy(
        () =>
          CdmBaseDatetimeMetafieldsReferenceWithMetaAdjustableOrRelativeDatesSchema
      ),
      swapStreamReference: z.lazy(
        () => CdmProductAssetMetafieldsReferenceWithMetaInterestRatePayoutSchema
      ),
    })
  );

export type CdmProductCommonScheduleFinalCalculationPeriodDateAdjustment =
  z.infer<
    typeof CdmProductCommonScheduleFinalCalculationPeriodDateAdjustmentSchema
  >;
