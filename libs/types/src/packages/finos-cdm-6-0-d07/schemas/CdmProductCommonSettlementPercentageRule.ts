import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetMetafieldsReferenceWithMetaMoneySchema } from './CdmObservableAssetMetafieldsReferenceWithMetaMoney';

export const CdmProductCommonSettlementPercentageRuleSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/settlement/PercentageRule']
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      notionalAmountReference: z.lazy(
        () => CdmObservableAssetMetafieldsReferenceWithMetaMoneySchema
      ),
      paymentPercent: z.number(),
    })
  );

export type CdmProductCommonSettlementPercentageRule = z.infer<
  typeof CdmProductCommonSettlementPercentageRuleSchema
>;
