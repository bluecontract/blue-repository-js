import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetMetafieldsReferenceWithMetaMoneySchema } from './CdmObservableAssetMetafieldsReferenceWithMetaMoney';

const zod = z as any;

export const CdmProductCommonSettlementPercentageRuleSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/settlement/PercentageRule']
  )(
    zod.object({
      description: zod.string().optional(),
      name: zod.string().optional(),
      notionalAmountReference: zod.lazy(
        () => CdmObservableAssetMetafieldsReferenceWithMetaMoneySchema
      ),
      paymentPercent: zod.number(),
    })
  );

export type CdmProductCommonSettlementPercentageRule = z.infer<
  typeof CdmProductCommonSettlementPercentageRuleSchema
>;
