import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableOrRelativeDateSchema } from './CdmBaseDatetimeAdjustableOrRelativeDate';
import { CdmProductCommonSettlementDeliveryMethodEnumSchema } from './CdmProductCommonSettlementDeliveryMethodEnum';

export const CdmProductTemplateAssetLegSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/AssetLeg']
)(
  z.object({
    deliveryMethod: z.lazy(
      () => CdmProductCommonSettlementDeliveryMethodEnumSchema
    ),
    description: z.string().optional(),
    name: z.string().optional(),
    settlementDate: z.lazy(() => CdmBaseDatetimeAdjustableOrRelativeDateSchema),
  })
);

export type CdmProductTemplateAssetLeg = z.infer<
  typeof CdmProductTemplateAssetLegSchema
>;
