import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableOrAdjustedOrRelativeDateSchema } from './CdmBaseDatetimeAdjustableOrAdjustedOrRelativeDate';
import { CdmBaseMathNonNegativeQuantitySchema } from './CdmBaseMathNonNegativeQuantity';
import { CdmBaseStaticdataAssetCommonAssetSchema } from './CdmBaseStaticdataAssetCommonAsset';

export const CdmProductCommonSettlementAssetFlowBaseSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/settlement/AssetFlowBase']
  )(
    z.object({
      asset: z.lazy(() => CdmBaseStaticdataAssetCommonAssetSchema),
      description: z.string().optional(),
      name: z.string().optional(),
      quantity: z.lazy(() => CdmBaseMathNonNegativeQuantitySchema),
      settlementDate: z.lazy(
        () => CdmBaseDatetimeAdjustableOrAdjustedOrRelativeDateSchema
      ),
    })
  );

export type CdmProductCommonSettlementAssetFlowBase = z.infer<
  typeof CdmProductCommonSettlementAssetFlowBaseSchema
>;
