import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableDateSchema } from './CdmBaseDatetimeAdjustableDate';
import { CdmBaseStaticdataPartyPayerReceiverSchema } from './CdmBaseStaticdataPartyPayerReceiver';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';

const zod = z as any;

export const CdmProductCommonSettlementPrincipalPaymentSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/settlement/PrincipalPayment']
  )(
    zod.object({
      description: zod.string().optional(),
      discountFactor: zod.number().optional(),
      name: zod.string().optional(),
      payerReceiver: zod
        .lazy(() => CdmBaseStaticdataPartyPayerReceiverSchema)
        .optional(),
      presentValuePrincipalAmount: zod
        .lazy(() => CdmObservableAssetMoneySchema)
        .optional(),
      principalAmount: zod.lazy(() => CdmObservableAssetMoneySchema).optional(),
      principalPaymentDate: zod
        .lazy(() => CdmBaseDatetimeAdjustableDateSchema)
        .optional(),
    })
  );

export type CdmProductCommonSettlementPrincipalPayment = z.infer<
  typeof CdmProductCommonSettlementPrincipalPaymentSchema
>;
