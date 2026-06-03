import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableOrRelativeDateSchema } from './CdmBaseDatetimeAdjustableOrRelativeDate';
import { CdmProductCommonSettlementDeliveryMethodEnumSchema } from './CdmProductCommonSettlementDeliveryMethodEnum';

const zod = z as any;

export const CdmProductTemplateAssetLegSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/AssetLeg']
)(
  zod.object({
    deliveryMethod: zod.lazy(
      () => CdmProductCommonSettlementDeliveryMethodEnumSchema
    ),
    description: zod.string().optional(),
    name: zod.string().optional(),
    settlementDate: zod.lazy(
      () => CdmBaseDatetimeAdjustableOrRelativeDateSchema
    ),
  })
);

export type CdmProductTemplateAssetLeg = z.infer<
  typeof CdmProductTemplateAssetLegSchema
>;
