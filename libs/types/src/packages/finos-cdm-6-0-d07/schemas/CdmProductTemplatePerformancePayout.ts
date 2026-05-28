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

export const CdmProductTemplatePerformancePayoutSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/PerformancePayout']
  )(
    z.object({
      description: z.string().optional(),
      finalValuationPrice: z
        .array(
          z.lazy(
            (): z.ZodTypeAny =>
              CdmObservableAssetMetafieldsReferenceWithMetaPriceScheduleSchema
          )
        )
        .min(0)
        .optional(),
      fxFeature: z
        .array(z.lazy((): z.ZodTypeAny => CdmProductTemplateFxFeatureSchema))
        .min(0)
        .optional(),
      initialValuationPrice: z
        .array(
          z.lazy(
            (): z.ZodTypeAny =>
              CdmObservableAssetMetafieldsReferenceWithMetaPriceScheduleSchema
          )
        )
        .min(0)
        .optional(),
      interimValuationPrice: z
        .array(
          z.lazy(
            (): z.ZodTypeAny =>
              CdmObservableAssetMetafieldsReferenceWithMetaPriceScheduleSchema
          )
        )
        .min(0)
        .optional(),
      name: z.string().optional(),
      observationTerms: z
        .lazy(
          (): z.ZodTypeAny => CdmProductCommonScheduleObservationTermsSchema
        )
        .optional(),
      payerReceiver: z
        .lazy((): z.ZodTypeAny => CdmBaseStaticdataPartyPayerReceiverSchema)
        .optional(),
      paymentDates: z.lazy(
        (): z.ZodTypeAny => CdmProductCommonSchedulePaymentDatesSchema
      ),
      portfolioReturnTerms: z
        .array(
          z.lazy(
            (): z.ZodTypeAny => CdmProductTemplatePortfolioReturnTermsSchema
          )
        )
        .min(0)
        .optional(),
      priceQuantity: z
        .lazy(
          (): z.ZodTypeAny =>
            CdmProductCommonSettlementResolvablePriceQuantitySchema
        )
        .optional(),
      principalPayment: z
        .lazy(
          (): z.ZodTypeAny => CdmProductCommonSettlementPrincipalPaymentsSchema
        )
        .optional(),
      returnTerms: z
        .lazy((): z.ZodTypeAny => CdmProductTemplateReturnTermsSchema)
        .optional(),
      settlementTerms: z
        .lazy(
          (): z.ZodTypeAny => CdmProductCommonSettlementSettlementTermsSchema
        )
        .optional(),
      underlier: z
        .lazy((): z.ZodTypeAny => CdmProductTemplateUnderlierSchema)
        .optional(),
      valuationDates: z.lazy(
        (): z.ZodTypeAny => CdmObservableAssetValuationDatesSchema
      ),
    })
  );

export type CdmProductTemplatePerformancePayout = z.infer<
  typeof CdmProductTemplatePerformancePayoutSchema
>;
