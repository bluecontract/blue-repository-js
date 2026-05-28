import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeOffsetSchema } from './CdmBaseDatetimeOffset';
import { CdmProductAssetRollSourceCalendarEnumSchema } from './CdmProductAssetRollSourceCalendarEnum';

export const CdmProductCommonSettlementRollFeatureSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/settlement/RollFeature']
  )(
    z.object({
      deliveryDateRollConvention: z
        .lazy(() => CdmBaseDatetimeOffsetSchema)
        .optional(),
      description: z.string().optional(),
      name: z.string().optional(),
      rollSourceCalendar: z
        .lazy(() => CdmProductAssetRollSourceCalendarEnumSchema)
        .optional(),
    })
  );

export type CdmProductCommonSettlementRollFeature = z.infer<
  typeof CdmProductCommonSettlementRollFeatureSchema
>;
