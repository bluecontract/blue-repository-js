import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyPayerReceiverSchema } from './CdmBaseStaticdataPartyPayerReceiver';
import { CdmObservableAssetMetafieldsReferenceWithMetaPriceScheduleSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaPriceSchedule';
import { CdmObservableAssetValuationDatesSchema } from './CdmObservableAssetValuationDates';
import { CdmProductCommonScheduleObservationTermsSchema } from './CdmProductCommonScheduleObservationTerms';
import { CdmProductCommonSchedulePaymentDatesSchema } from './CdmProductCommonSchedulePaymentDates';
import { CdmProductCommonSettlementPrincipalPaymentsSchema } from './CdmProductCommonSettlementPrincipalPayments';
import { CdmProductCommonSettlementResolvablePriceQuantitySchema } from './CdmProductCommonSettlementResolvablePriceQuantity';
import { CdmProductCommonSettlementSettlementTermsSchema } from './CdmProductCommonSettlementSettlementTerms';
import { CdmProductTemplateFxFeatureSchema } from './CdmProductTemplateFxFeature';
import { CdmProductTemplatePortfolioReturnTermsSchema } from './CdmProductTemplatePortfolioReturnTerms';
import { CdmProductTemplateReturnTermsSchema } from './CdmProductTemplateReturnTerms';
import { CdmProductTemplateUnderlierSchema } from './CdmProductTemplateUnderlier';

const zod = z as any;

export const CdmProductTemplatePerformancePayoutSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/PerformancePayout']
)(
  zod.object({
    description: zod.string().optional(),
    finalValuationPrice: zod
      .array(
        zod.lazy(
          (): z.ZodTypeAny =>
            CdmObservableAssetMetafieldsReferenceWithMetaPriceScheduleSchema
        )
      )
      .min(0)
      .optional(),
    fxFeature: zod
      .array(zod.lazy((): z.ZodTypeAny => CdmProductTemplateFxFeatureSchema))
      .min(0)
      .optional(),
    initialValuationPrice: zod
      .array(
        zod.lazy(
          (): z.ZodTypeAny =>
            CdmObservableAssetMetafieldsReferenceWithMetaPriceScheduleSchema
        )
      )
      .min(0)
      .optional(),
    interimValuationPrice: zod
      .array(
        zod.lazy(
          (): z.ZodTypeAny =>
            CdmObservableAssetMetafieldsReferenceWithMetaPriceScheduleSchema
        )
      )
      .min(0)
      .optional(),
    name: zod.string().optional(),
    observationTerms: zod
      .lazy((): z.ZodTypeAny => CdmProductCommonScheduleObservationTermsSchema)
      .optional(),
    payerReceiver: zod
      .lazy((): z.ZodTypeAny => CdmBaseStaticdataPartyPayerReceiverSchema)
      .optional(),
    paymentDates: zod.lazy(
      (): z.ZodTypeAny => CdmProductCommonSchedulePaymentDatesSchema
    ),
    portfolioReturnTerms: zod
      .array(
        zod.lazy(
          (): z.ZodTypeAny => CdmProductTemplatePortfolioReturnTermsSchema
        )
      )
      .min(0)
      .optional(),
    priceQuantity: zod
      .lazy(
        (): z.ZodTypeAny =>
          CdmProductCommonSettlementResolvablePriceQuantitySchema
      )
      .optional(),
    principalPayment: zod
      .lazy(
        (): z.ZodTypeAny => CdmProductCommonSettlementPrincipalPaymentsSchema
      )
      .optional(),
    returnTerms: zod
      .lazy((): z.ZodTypeAny => CdmProductTemplateReturnTermsSchema)
      .optional(),
    settlementTerms: zod
      .lazy((): z.ZodTypeAny => CdmProductCommonSettlementSettlementTermsSchema)
      .optional(),
    underlier: zod
      .lazy((): z.ZodTypeAny => CdmProductTemplateUnderlierSchema)
      .optional(),
    valuationDates: zod.lazy(
      (): z.ZodTypeAny => CdmObservableAssetValuationDatesSchema
    ),
  })
);

export type CdmProductTemplatePerformancePayout = z.infer<
  typeof CdmProductTemplatePerformancePayoutSchema
>;
