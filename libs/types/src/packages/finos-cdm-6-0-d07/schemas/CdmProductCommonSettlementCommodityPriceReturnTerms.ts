import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathRoundingSchema } from './CdmBaseMathRounding';
import { CdmProductAssetSpreadScheduleSchema } from './CdmProductAssetSpreadSchedule';
import { CdmProductCommonSettlementRollFeatureSchema } from './CdmProductCommonSettlementRollFeature';

export const CdmProductCommonSettlementCommodityPriceReturnTermsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/settlement/CommodityPriceReturnTerms'
    ]
  )(
    z.object({
      conversionFactor: z.number().optional(),
      description: z.string().optional(),
      name: z.string().optional(),
      rollFeature: z
        .lazy(() => CdmProductCommonSettlementRollFeatureSchema)
        .optional(),
      rounding: z.lazy(() => CdmBaseMathRoundingSchema).optional(),
      spread: z.lazy(() => CdmProductAssetSpreadScheduleSchema).optional(),
    })
  );

export type CdmProductCommonSettlementCommodityPriceReturnTerms = z.infer<
  typeof CdmProductCommonSettlementCommodityPriceReturnTermsSchema
>;
