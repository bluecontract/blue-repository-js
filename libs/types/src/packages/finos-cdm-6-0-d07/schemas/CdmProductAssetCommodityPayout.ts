import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyPayerReceiverSchema } from './CdmBaseStaticdataPartyPayerReceiver';
import { CdmProductAssetAssetDeliveryInformationSchema } from './CdmProductAssetAssetDeliveryInformation';
import { CdmProductCommonScheduleCalculationPeriodDatesSchema } from './CdmProductCommonScheduleCalculationPeriodDates';
import { CdmProductCommonSchedulePaymentDatesSchema } from './CdmProductCommonSchedulePaymentDates';
import { CdmProductCommonSettlementCommodityPriceReturnTermsSchema } from './CdmProductCommonSettlementCommodityPriceReturnTerms';
import { CdmProductCommonSettlementPricingDatesSchema } from './CdmProductCommonSettlementPricingDates';
import { CdmProductCommonSettlementPrincipalPaymentsSchema } from './CdmProductCommonSettlementPrincipalPayments';
import { CdmProductCommonSettlementResolvablePriceQuantitySchema } from './CdmProductCommonSettlementResolvablePriceQuantity';
import { CdmProductCommonSettlementSettlementTermsSchema } from './CdmProductCommonSettlementSettlementTerms';
import { CdmProductTemplateAveragingCalculationSchema } from './CdmProductTemplateAveragingCalculation';
import { CdmProductTemplateCalculationScheduleSchema } from './CdmProductTemplateCalculationSchedule';
import { CdmProductTemplateFxFeatureSchema } from './CdmProductTemplateFxFeature';
import { CdmProductTemplateUnderlierSchema } from './CdmProductTemplateUnderlier';

export const CdmProductAssetCommodityPayoutSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/CommodityPayout']
  )(
    z.object({
      averagingFeature: z
        .lazy((): z.ZodTypeAny => CdmProductTemplateAveragingCalculationSchema)
        .optional(),
      calculationPeriodDates: z
        .lazy(
          (): z.ZodTypeAny =>
            CdmProductCommonScheduleCalculationPeriodDatesSchema
        )
        .optional(),
      commodityPriceReturnTerms: z
        .lazy(
          (): z.ZodTypeAny =>
            CdmProductCommonSettlementCommodityPriceReturnTermsSchema
        )
        .optional(),
      delivery: z
        .lazy((): z.ZodTypeAny => CdmProductAssetAssetDeliveryInformationSchema)
        .optional(),
      description: z.string().optional(),
      fxFeature: z
        .lazy((): z.ZodTypeAny => CdmProductTemplateFxFeatureSchema)
        .optional(),
      name: z.string().optional(),
      payerReceiver: z
        .lazy((): z.ZodTypeAny => CdmBaseStaticdataPartyPayerReceiverSchema)
        .optional(),
      paymentDates: z.lazy(
        (): z.ZodTypeAny => CdmProductCommonSchedulePaymentDatesSchema
      ),
      priceQuantity: z
        .lazy(
          (): z.ZodTypeAny =>
            CdmProductCommonSettlementResolvablePriceQuantitySchema
        )
        .optional(),
      pricingDates: z.lazy(
        (): z.ZodTypeAny => CdmProductCommonSettlementPricingDatesSchema
      ),
      principalPayment: z
        .lazy(
          (): z.ZodTypeAny => CdmProductCommonSettlementPrincipalPaymentsSchema
        )
        .optional(),
      schedule: z
        .lazy((): z.ZodTypeAny => CdmProductTemplateCalculationScheduleSchema)
        .optional(),
      settlementTerms: z
        .lazy(
          (): z.ZodTypeAny => CdmProductCommonSettlementSettlementTermsSchema
        )
        .optional(),
      underlier: z.lazy((): z.ZodTypeAny => CdmProductTemplateUnderlierSchema),
    })
  );

export type CdmProductAssetCommodityPayout = z.infer<
  typeof CdmProductAssetCommodityPayoutSchema
>;
