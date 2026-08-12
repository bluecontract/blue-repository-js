import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyPayerReceiverSchema } from './CdmBaseStaticdataPartyPayerReceiver';
import { CdmProductCommonSchedulePaymentDatesSchema } from './CdmProductCommonSchedulePaymentDates';
import { CdmProductCommonSettlementFixedPriceSchema } from './CdmProductCommonSettlementFixedPrice';
import { CdmProductCommonSettlementPrincipalPaymentsSchema } from './CdmProductCommonSettlementPrincipalPayments';
import { CdmProductCommonSettlementResolvablePriceQuantitySchema } from './CdmProductCommonSettlementResolvablePriceQuantity';
import { CdmProductCommonSettlementSettlementTermsSchema } from './CdmProductCommonSettlementSettlementTerms';
import { CdmProductTemplateCalculationScheduleSchema } from './CdmProductTemplateCalculationSchedule';

const zod = z as any;

export const CdmProductTemplateFixedPricePayoutSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/FixedPricePayout']
)(
  zod.object({
    description: zod.string().optional(),
    fixedPrice: zod.lazy(() => CdmProductCommonSettlementFixedPriceSchema),
    name: zod.string().optional(),
    payerReceiver: zod
      .lazy(() => CdmBaseStaticdataPartyPayerReceiverSchema)
      .optional(),
    paymentDates: zod.lazy(() => CdmProductCommonSchedulePaymentDatesSchema),
    priceQuantity: zod
      .lazy(() => CdmProductCommonSettlementResolvablePriceQuantitySchema)
      .optional(),
    principalPayment: zod
      .lazy(() => CdmProductCommonSettlementPrincipalPaymentsSchema)
      .optional(),
    schedule: zod
      .lazy(() => CdmProductTemplateCalculationScheduleSchema)
      .optional(),
    settlementTerms: zod
      .lazy(() => CdmProductCommonSettlementSettlementTermsSchema)
      .optional(),
  })
);

export type CdmProductTemplateFixedPricePayout = z.infer<
  typeof CdmProductTemplateFixedPricePayoutSchema
>;
