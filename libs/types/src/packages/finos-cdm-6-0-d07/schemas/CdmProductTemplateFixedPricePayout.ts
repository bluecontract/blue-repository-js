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

export const CdmProductTemplateFixedPricePayoutSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/FixedPricePayout']
  )(
    z.object({
      description: z.string().optional(),
      fixedPrice: z.lazy(() => CdmProductCommonSettlementFixedPriceSchema),
      name: z.string().optional(),
      payerReceiver: z
        .lazy(() => CdmBaseStaticdataPartyPayerReceiverSchema)
        .optional(),
      paymentDates: z.lazy(() => CdmProductCommonSchedulePaymentDatesSchema),
      priceQuantity: z
        .lazy(() => CdmProductCommonSettlementResolvablePriceQuantitySchema)
        .optional(),
      principalPayment: z
        .lazy(() => CdmProductCommonSettlementPrincipalPaymentsSchema)
        .optional(),
      schedule: z
        .lazy(() => CdmProductTemplateCalculationScheduleSchema)
        .optional(),
      settlementTerms: z
        .lazy(() => CdmProductCommonSettlementSettlementTermsSchema)
        .optional(),
    })
  );

export type CdmProductTemplateFixedPricePayout = z.infer<
  typeof CdmProductTemplateFixedPricePayoutSchema
>;
