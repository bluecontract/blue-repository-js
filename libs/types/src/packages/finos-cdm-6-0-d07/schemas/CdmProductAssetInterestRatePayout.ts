import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableDateSchema } from './CdmBaseDatetimeAdjustableDate';
import { CdmBaseDatetimeDaycountFieldWithMetaDayCountFractionEnumSchema } from './CdmBaseDatetimeDaycountFieldWithMetaDayCountFractionEnum';
import { CdmBaseStaticdataPartyPayerReceiverSchema } from './CdmBaseStaticdataPartyPayerReceiver';
import { CdmProductAssetBondReferenceSchema } from './CdmProductAssetBondReference';
import { CdmProductAssetCashflowRepresentationSchema } from './CdmProductAssetCashflowRepresentation';
import { CdmProductAssetCompoundingMethodEnumSchema } from './CdmProductAssetCompoundingMethodEnum';
import { CdmProductAssetDiscountingMethodSchema } from './CdmProductAssetDiscountingMethod';
import { CdmProductAssetRateSpecificationSchema } from './CdmProductAssetRateSpecification';
import { CdmProductAssetSpreadCalculationMethodEnumSchema } from './CdmProductAssetSpreadCalculationMethodEnum';
import { CdmProductCommonScheduleCalculationPeriodDatesSchema } from './CdmProductCommonScheduleCalculationPeriodDates';
import { CdmProductCommonSchedulePaymentDatesSchema } from './CdmProductCommonSchedulePaymentDates';
import { CdmProductCommonScheduleResetDatesSchema } from './CdmProductCommonScheduleResetDates';
import { CdmProductCommonScheduleStubPeriodSchema } from './CdmProductCommonScheduleStubPeriod';
import { CdmProductCommonSettlementPrincipalPaymentsSchema } from './CdmProductCommonSettlementPrincipalPayments';
import { CdmProductCommonSettlementResolvablePriceQuantitySchema } from './CdmProductCommonSettlementResolvablePriceQuantity';
import { CdmProductCommonSettlementSettlementTermsSchema } from './CdmProductCommonSettlementSettlementTerms';

export const CdmProductAssetInterestRatePayoutSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/InterestRatePayout']
  )(
    z.object({
      bondReference: z
        .lazy(() => CdmProductAssetBondReferenceSchema)
        .optional(),
      calculationPeriodDates: z
        .lazy(() => CdmProductCommonScheduleCalculationPeriodDatesSchema)
        .optional(),
      cashflowRepresentation: z
        .lazy(() => CdmProductAssetCashflowRepresentationSchema)
        .optional(),
      compoundingMethod: z
        .lazy(() => CdmProductAssetCompoundingMethodEnumSchema)
        .optional(),
      dayCountFraction: z
        .lazy(
          () => CdmBaseDatetimeDaycountFieldWithMetaDayCountFractionEnumSchema
        )
        .optional(),
      description: z.string().optional(),
      discountingMethod: z
        .lazy(() => CdmProductAssetDiscountingMethodSchema)
        .optional(),
      fixedAmount: z.string().optional(),
      floatingAmount: z.string().optional(),
      name: z.string().optional(),
      payerReceiver: z
        .lazy(() => CdmBaseStaticdataPartyPayerReceiverSchema)
        .optional(),
      paymentDate: z.lazy(() => CdmBaseDatetimeAdjustableDateSchema).optional(),
      paymentDates: z
        .lazy(() => CdmProductCommonSchedulePaymentDatesSchema)
        .optional(),
      paymentDelay: z.boolean().optional(),
      priceQuantity: z
        .lazy(() => CdmProductCommonSettlementResolvablePriceQuantitySchema)
        .optional(),
      principalPayment: z
        .lazy(() => CdmProductCommonSettlementPrincipalPaymentsSchema)
        .optional(),
      rateSpecification: z
        .lazy(() => CdmProductAssetRateSpecificationSchema)
        .optional(),
      resetDates: z
        .lazy(() => CdmProductCommonScheduleResetDatesSchema)
        .optional(),
      settlementTerms: z
        .lazy(() => CdmProductCommonSettlementSettlementTermsSchema)
        .optional(),
      spreadCalculationMethod: z
        .lazy(() => CdmProductAssetSpreadCalculationMethodEnumSchema)
        .optional(),
      stubPeriod: z
        .lazy(() => CdmProductCommonScheduleStubPeriodSchema)
        .optional(),
    })
  );

export type CdmProductAssetInterestRatePayout = z.infer<
  typeof CdmProductAssetInterestRatePayoutSchema
>;
