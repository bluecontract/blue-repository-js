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

const zod = z as any;

export const CdmProductAssetInterestRatePayoutSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/InterestRatePayout']
)(
  zod.object({
    bondReference: zod
      .lazy(() => CdmProductAssetBondReferenceSchema)
      .optional(),
    calculationPeriodDates: zod
      .lazy(() => CdmProductCommonScheduleCalculationPeriodDatesSchema)
      .optional(),
    cashflowRepresentation: zod
      .lazy(() => CdmProductAssetCashflowRepresentationSchema)
      .optional(),
    compoundingMethod: zod
      .lazy(() => CdmProductAssetCompoundingMethodEnumSchema)
      .optional(),
    dayCountFraction: zod
      .lazy(
        () => CdmBaseDatetimeDaycountFieldWithMetaDayCountFractionEnumSchema
      )
      .optional(),
    description: zod.string().optional(),
    discountingMethod: zod
      .lazy(() => CdmProductAssetDiscountingMethodSchema)
      .optional(),
    fixedAmount: zod.string().optional(),
    floatingAmount: zod.string().optional(),
    name: zod.string().optional(),
    payerReceiver: zod
      .lazy(() => CdmBaseStaticdataPartyPayerReceiverSchema)
      .optional(),
    paymentDate: zod.lazy(() => CdmBaseDatetimeAdjustableDateSchema).optional(),
    paymentDates: zod
      .lazy(() => CdmProductCommonSchedulePaymentDatesSchema)
      .optional(),
    paymentDelay: zod.boolean().optional(),
    priceQuantity: zod
      .lazy(() => CdmProductCommonSettlementResolvablePriceQuantitySchema)
      .optional(),
    principalPayment: zod
      .lazy(() => CdmProductCommonSettlementPrincipalPaymentsSchema)
      .optional(),
    rateSpecification: zod
      .lazy(() => CdmProductAssetRateSpecificationSchema)
      .optional(),
    resetDates: zod
      .lazy(() => CdmProductCommonScheduleResetDatesSchema)
      .optional(),
    settlementTerms: zod
      .lazy(() => CdmProductCommonSettlementSettlementTermsSchema)
      .optional(),
    spreadCalculationMethod: zod
      .lazy(() => CdmProductAssetSpreadCalculationMethodEnumSchema)
      .optional(),
    stubPeriod: zod
      .lazy(() => CdmProductCommonScheduleStubPeriodSchema)
      .optional(),
  })
);

export type CdmProductAssetInterestRatePayout = z.infer<
  typeof CdmProductAssetInterestRatePayoutSchema
>;
