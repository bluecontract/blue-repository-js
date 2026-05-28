import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyPayerReceiverSchema } from './CdmBaseStaticdataPartyPayerReceiver';
import { CdmProductCommonSettlementPrincipalPaymentsSchema } from './CdmProductCommonSettlementPrincipalPayments';
import { CdmProductCommonSettlementResolvablePriceQuantitySchema } from './CdmProductCommonSettlementResolvablePriceQuantity';
import { CdmProductCommonSettlementSettlementTermsSchema } from './CdmProductCommonSettlementSettlementTerms';

export const CdmProductCommonSettlementPayoutBaseSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/settlement/PayoutBase']
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      payerReceiver: z.lazy(() => CdmBaseStaticdataPartyPayerReceiverSchema),
      priceQuantity: z
        .lazy(() => CdmProductCommonSettlementResolvablePriceQuantitySchema)
        .optional(),
      principalPayment: z
        .lazy(() => CdmProductCommonSettlementPrincipalPaymentsSchema)
        .optional(),
      settlementTerms: z
        .lazy(() => CdmProductCommonSettlementSettlementTermsSchema)
        .optional(),
    })
  );

export type CdmProductCommonSettlementPayoutBase = z.infer<
  typeof CdmProductCommonSettlementPayoutBaseSchema
>;
