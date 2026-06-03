import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyPayerReceiverSchema } from './CdmBaseStaticdataPartyPayerReceiver';
import { CdmProductCommonSettlementPrincipalPaymentsSchema } from './CdmProductCommonSettlementPrincipalPayments';
import { CdmProductCommonSettlementResolvablePriceQuantitySchema } from './CdmProductCommonSettlementResolvablePriceQuantity';
import { CdmProductCommonSettlementSettlementTermsSchema } from './CdmProductCommonSettlementSettlementTerms';

const zod = z as any;

export const CdmProductCommonSettlementPayoutBaseSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/common/settlement/PayoutBase']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    payerReceiver: zod.lazy(() => CdmBaseStaticdataPartyPayerReceiverSchema),
    priceQuantity: zod
      .lazy(() => CdmProductCommonSettlementResolvablePriceQuantitySchema)
      .optional(),
    principalPayment: zod
      .lazy(() => CdmProductCommonSettlementPrincipalPaymentsSchema)
      .optional(),
    settlementTerms: zod
      .lazy(() => CdmProductCommonSettlementSettlementTermsSchema)
      .optional(),
  })
);

export type CdmProductCommonSettlementPayoutBase = z.infer<
  typeof CdmProductCommonSettlementPayoutBaseSchema
>;
