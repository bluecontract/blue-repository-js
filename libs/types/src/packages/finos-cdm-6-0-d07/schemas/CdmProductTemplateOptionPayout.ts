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

export const CdmProductTemplateOptionPayoutSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/OptionPayout']
  )(
    z.object({
      buyerSeller: z.lazy(
        (): z.ZodTypeAny => CdmBaseStaticdataPartyBuyerSellerSchema
      ),
      delivery: z
        .lazy((): z.ZodTypeAny => CdmProductAssetAssetDeliveryInformationSchema)
        .optional(),
      description: z.string().optional(),
      exerciseTerms: z.lazy(
        (): z.ZodTypeAny => CdmProductTemplateExerciseTermsSchema
      ),
      feature: z
        .lazy((): z.ZodTypeAny => CdmProductTemplateOptionFeatureSchema)
        .optional(),
      name: z.string().optional(),
      observationTerms: z
        .lazy(
          (): z.ZodTypeAny => CdmProductCommonScheduleObservationTermsSchema
        )
        .optional(),
      optionType: z
        .lazy((): z.ZodTypeAny => CdmProductTemplateOptionTypeEnumSchema)
        .optional(),
      payerReceiver: z
        .lazy((): z.ZodTypeAny => CdmBaseStaticdataPartyPayerReceiverSchema)
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
      schedule: z
        .lazy((): z.ZodTypeAny => CdmProductTemplateCalculationScheduleSchema)
        .optional(),
      settlementTerms: z
        .lazy(
          (): z.ZodTypeAny => CdmProductCommonSettlementSettlementTermsSchema
        )
        .optional(),
      strike: z
        .lazy((): z.ZodTypeAny => CdmProductTemplateOptionStrikeSchema)
        .optional(),
      underlier: z.lazy((): z.ZodTypeAny => CdmProductTemplateUnderlierSchema),
    })
  );

export type CdmProductTemplateOptionPayout = z.infer<
  typeof CdmProductTemplateOptionPayoutSchema
>;
