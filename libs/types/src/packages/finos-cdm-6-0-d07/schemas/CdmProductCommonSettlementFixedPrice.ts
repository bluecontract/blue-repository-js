import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetMetafieldsReferenceWithMetaPriceScheduleSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaPriceSchedule';

const zod = z as any;

export const CdmProductCommonSettlementFixedPriceSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/common/settlement/FixedPrice']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    price: zod
      .lazy(
        () => CdmObservableAssetMetafieldsReferenceWithMetaPriceScheduleSchema
      )
      .optional(),
  })
);

export type CdmProductCommonSettlementFixedPrice = z.infer<
  typeof CdmProductCommonSettlementFixedPriceSchema
>;
