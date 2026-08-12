import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeBusinessDayConventionEnumSchema } from './CdmBaseDatetimeBusinessDayConventionEnum';
import { CdmBaseDatetimeMetafieldsReferenceWithMetaAdjustableOrRelativeDatesSchema } from './CdmBaseDatetimeMetafieldsReferenceWithMetaAdjustableOrRelativeDates';
import { CdmProductAssetMetafieldsReferenceWithMetaInterestRatePayoutSchema } from './CdmProductAssetMetafieldsReferenceWithMetaInterestRatePayout';

const zod = z as any;

export const CdmProductCommonScheduleFinalCalculationPeriodDateAdjustmentSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/schedule/FinalCalculationPeriodDateAdjustment'
    ]
  )(
    zod.object({
      businessDayConvention: zod.lazy(
        () => CdmBaseDatetimeBusinessDayConventionEnumSchema
      ),
      description: zod.string().optional(),
      name: zod.string().optional(),
      relevantUnderlyingDateReference: zod.lazy(
        () =>
          CdmBaseDatetimeMetafieldsReferenceWithMetaAdjustableOrRelativeDatesSchema
      ),
      swapStreamReference: zod.lazy(
        () => CdmProductAssetMetafieldsReferenceWithMetaInterestRatePayoutSchema
      ),
    })
  );

export type CdmProductCommonScheduleFinalCalculationPeriodDateAdjustment =
  z.infer<
    typeof CdmProductCommonScheduleFinalCalculationPeriodDateAdjustmentSchema
  >;
