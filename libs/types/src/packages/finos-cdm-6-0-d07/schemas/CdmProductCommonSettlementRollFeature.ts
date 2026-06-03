import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeOffsetSchema } from './CdmBaseDatetimeOffset';
import { CdmProductAssetRollSourceCalendarEnumSchema } from './CdmProductAssetRollSourceCalendarEnum';

const zod = z as any;

export const CdmProductCommonSettlementRollFeatureSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/common/settlement/RollFeature']
)(
  zod.object({
    deliveryDateRollConvention: zod
      .lazy(() => CdmBaseDatetimeOffsetSchema)
      .optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    rollSourceCalendar: zod
      .lazy(() => CdmProductAssetRollSourceCalendarEnumSchema)
      .optional(),
  })
);

export type CdmProductCommonSettlementRollFeature = z.infer<
  typeof CdmProductCommonSettlementRollFeatureSchema
>;
