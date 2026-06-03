import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';

const zod = z as any;

export const CdmProductCommonSettlementPaymentDiscountingSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/settlement/PaymentDiscounting'
    ]
  )(
    zod.object({
      description: zod.string().optional(),
      discountFactor: zod.number().optional(),
      name: zod.string().optional(),
      presentValueAmount: zod
        .lazy(() => CdmObservableAssetMoneySchema)
        .optional(),
    })
  );

export type CdmProductCommonSettlementPaymentDiscounting = z.infer<
  typeof CdmProductCommonSettlementPaymentDiscountingSchema
>;
