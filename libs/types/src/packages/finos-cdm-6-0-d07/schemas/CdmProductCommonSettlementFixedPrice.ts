import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetMetafieldsReferenceWithMetaPriceScheduleSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaPriceSchedule';

export const CdmProductCommonSettlementFixedPriceSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/settlement/FixedPrice']
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      price: z
        .lazy(
          () => CdmObservableAssetMetafieldsReferenceWithMetaPriceScheduleSchema
        )
        .optional(),
    })
  );

export type CdmProductCommonSettlementFixedPrice = z.infer<
  typeof CdmProductCommonSettlementFixedPriceSchema
>;
