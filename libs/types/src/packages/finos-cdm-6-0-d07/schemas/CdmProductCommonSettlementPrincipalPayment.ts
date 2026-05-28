import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableDateSchema } from './CdmBaseDatetimeAdjustableDate';
import { CdmBaseStaticdataPartyPayerReceiverSchema } from './CdmBaseStaticdataPartyPayerReceiver';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';

export const CdmProductCommonSettlementPrincipalPaymentSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/settlement/PrincipalPayment']
  )(
    z.object({
      description: z.string().optional(),
      discountFactor: z.number().optional(),
      name: z.string().optional(),
      payerReceiver: z
        .lazy(() => CdmBaseStaticdataPartyPayerReceiverSchema)
        .optional(),
      presentValuePrincipalAmount: z
        .lazy(() => CdmObservableAssetMoneySchema)
        .optional(),
      principalAmount: z.lazy(() => CdmObservableAssetMoneySchema).optional(),
      principalPaymentDate: z
        .lazy(() => CdmBaseDatetimeAdjustableDateSchema)
        .optional(),
    })
  );

export type CdmProductCommonSettlementPrincipalPayment = z.infer<
  typeof CdmProductCommonSettlementPrincipalPaymentSchema
>;
