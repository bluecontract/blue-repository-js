import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';

export const CdmProductCommonSettlementPaymentDiscountingSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/settlement/PaymentDiscounting'
    ]
  )(
    z.object({
      description: z.string().optional(),
      discountFactor: z.number().optional(),
      name: z.string().optional(),
      presentValueAmount: z
        .lazy(() => CdmObservableAssetMoneySchema)
        .optional(),
    })
  );

export type CdmProductCommonSettlementPaymentDiscounting = z.infer<
  typeof CdmProductCommonSettlementPaymentDiscountingSchema
>;
