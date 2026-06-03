import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableOrAdjustedOrRelativeDateSchema } from './CdmBaseDatetimeAdjustableOrAdjustedOrRelativeDate';
import { CdmBaseMathNonNegativeQuantitySchema } from './CdmBaseMathNonNegativeQuantity';
import { CdmBaseStaticdataAssetCommonAssetSchema } from './CdmBaseStaticdataAssetCommonAsset';

const zod = z as any;

export const CdmProductCommonSettlementAssetFlowBaseSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/settlement/AssetFlowBase']
  )(
    zod.object({
      asset: zod.lazy(() => CdmBaseStaticdataAssetCommonAssetSchema),
      description: zod.string().optional(),
      name: zod.string().optional(),
      quantity: zod.lazy(() => CdmBaseMathNonNegativeQuantitySchema),
      settlementDate: zod.lazy(
        () => CdmBaseDatetimeAdjustableOrAdjustedOrRelativeDateSchema
      ),
    })
  );

export type CdmProductCommonSettlementAssetFlowBase = z.infer<
  typeof CdmProductCommonSettlementAssetFlowBaseSchema
>;
