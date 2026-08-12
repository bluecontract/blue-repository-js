import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathRoundingSchema } from './CdmBaseMathRounding';
import { CdmProductAssetSpreadScheduleSchema } from './CdmProductAssetSpreadSchedule';
import { CdmProductCommonSettlementRollFeatureSchema } from './CdmProductCommonSettlementRollFeature';

const zod = z as any;

export const CdmProductCommonSettlementCommodityPriceReturnTermsSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/settlement/CommodityPriceReturnTerms'
    ]
  )(
    zod.object({
      conversionFactor: zod.number().optional(),
      description: zod.string().optional(),
      name: zod.string().optional(),
      rollFeature: zod
        .lazy(() => CdmProductCommonSettlementRollFeatureSchema)
        .optional(),
      rounding: zod.lazy(() => CdmBaseMathRoundingSchema).optional(),
      spread: zod.lazy(() => CdmProductAssetSpreadScheduleSchema).optional(),
    })
  );

export type CdmProductCommonSettlementCommodityPriceReturnTerms = z.infer<
  typeof CdmProductCommonSettlementCommodityPriceReturnTermsSchema
>;
