import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyBuyerSellerSchema } from './CdmBaseStaticdataPartyBuyerSeller';
import { CdmBaseStaticdataPartyPayerReceiverSchema } from './CdmBaseStaticdataPartyPayerReceiver';
import { CdmProductAssetAssetDeliveryInformationSchema } from './CdmProductAssetAssetDeliveryInformation';
import { CdmProductCommonScheduleObservationTermsSchema } from './CdmProductCommonScheduleObservationTerms';
import { CdmProductCommonSettlementPrincipalPaymentsSchema } from './CdmProductCommonSettlementPrincipalPayments';
import { CdmProductCommonSettlementResolvablePriceQuantitySchema } from './CdmProductCommonSettlementResolvablePriceQuantity';
import { CdmProductCommonSettlementSettlementTermsSchema } from './CdmProductCommonSettlementSettlementTerms';
import { CdmProductTemplateCalculationScheduleSchema } from './CdmProductTemplateCalculationSchedule';
import { CdmProductTemplateExerciseTermsSchema } from './CdmProductTemplateExerciseTerms';
import { CdmProductTemplateOptionFeatureSchema } from './CdmProductTemplateOptionFeature';
import { CdmProductTemplateOptionStrikeSchema } from './CdmProductTemplateOptionStrike';
import { CdmProductTemplateOptionTypeEnumSchema } from './CdmProductTemplateOptionTypeEnum';
import { CdmProductTemplateUnderlierSchema } from './CdmProductTemplateUnderlier';

const zod = z as any;

export const CdmProductTemplateOptionPayoutSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/OptionPayout']
)(
  zod.object({
    buyerSeller: zod.lazy(
      (): z.ZodTypeAny => CdmBaseStaticdataPartyBuyerSellerSchema
    ),
    delivery: zod
      .lazy((): z.ZodTypeAny => CdmProductAssetAssetDeliveryInformationSchema)
      .optional(),
    description: zod.string().optional(),
    exerciseTerms: zod.lazy(
      (): z.ZodTypeAny => CdmProductTemplateExerciseTermsSchema
    ),
    feature: zod
      .lazy((): z.ZodTypeAny => CdmProductTemplateOptionFeatureSchema)
      .optional(),
    name: zod.string().optional(),
    observationTerms: zod
      .lazy((): z.ZodTypeAny => CdmProductCommonScheduleObservationTermsSchema)
      .optional(),
    optionType: zod
      .lazy((): z.ZodTypeAny => CdmProductTemplateOptionTypeEnumSchema)
      .optional(),
    payerReceiver: zod
      .lazy((): z.ZodTypeAny => CdmBaseStaticdataPartyPayerReceiverSchema)
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
    schedule: zod
      .lazy((): z.ZodTypeAny => CdmProductTemplateCalculationScheduleSchema)
      .optional(),
    settlementTerms: zod
      .lazy((): z.ZodTypeAny => CdmProductCommonSettlementSettlementTermsSchema)
      .optional(),
    strike: zod
      .lazy((): z.ZodTypeAny => CdmProductTemplateOptionStrikeSchema)
      .optional(),
    underlier: zod.lazy((): z.ZodTypeAny => CdmProductTemplateUnderlierSchema),
  })
);

export type CdmProductTemplateOptionPayout = z.infer<
  typeof CdmProductTemplateOptionPayoutSchema
>;
