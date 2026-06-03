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

const zod = z as any;

export const CdmProductAssetCommodityPayoutSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/CommodityPayout']
)(
  zod.object({
    averagingFeature: zod
      .lazy((): z.ZodTypeAny => CdmProductTemplateAveragingCalculationSchema)
      .optional(),
    calculationPeriodDates: zod
      .lazy(
        (): z.ZodTypeAny => CdmProductCommonScheduleCalculationPeriodDatesSchema
      )
      .optional(),
    commodityPriceReturnTerms: zod
      .lazy(
        (): z.ZodTypeAny =>
          CdmProductCommonSettlementCommodityPriceReturnTermsSchema
      )
      .optional(),
    delivery: zod
      .lazy((): z.ZodTypeAny => CdmProductAssetAssetDeliveryInformationSchema)
      .optional(),
    description: zod.string().optional(),
    fxFeature: zod
      .lazy((): z.ZodTypeAny => CdmProductTemplateFxFeatureSchema)
      .optional(),
    name: zod.string().optional(),
    payerReceiver: zod
      .lazy((): z.ZodTypeAny => CdmBaseStaticdataPartyPayerReceiverSchema)
      .optional(),
    paymentDates: zod.lazy(
      (): z.ZodTypeAny => CdmProductCommonSchedulePaymentDatesSchema
    ),
    priceQuantity: zod
      .lazy(
        (): z.ZodTypeAny =>
          CdmProductCommonSettlementResolvablePriceQuantitySchema
      )
      .optional(),
    pricingDates: zod.lazy(
      (): z.ZodTypeAny => CdmProductCommonSettlementPricingDatesSchema
    ),
    principalPayment: zod
      .lazy(
        (): z.ZodTypeAny => CdmProductCommonSettlementPrincipalPaymentsSchema
      )
      .optional(),
    schedule: zod
      .lazy((): z.ZodTypeAny => CdmProductTemplateCalculationScheduleSchema)
      .optional(),
    settlementTerms: zod
      .lazy((): z.ZodTypeAny => CdmProductCommonSettlementSettlementTermsSchema)
      .optional(),
    underlier: zod.lazy((): z.ZodTypeAny => CdmProductTemplateUnderlierSchema),
  })
);

export type CdmProductAssetCommodityPayout = z.infer<
  typeof CdmProductAssetCommodityPayoutSchema
>;
