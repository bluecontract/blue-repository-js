import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyPayerReceiverSchema } from './CdmBaseStaticdataPartyPayerReceiver';
import { CdmProductAssetAssetDeliveryInformationSchema } from './CdmProductAssetAssetDeliveryInformation';
import { CdmProductCommonSettlementPrincipalPaymentsSchema } from './CdmProductCommonSettlementPrincipalPayments';
import { CdmProductCommonSettlementResolvablePriceQuantitySchema } from './CdmProductCommonSettlementResolvablePriceQuantity';
import { CdmProductCommonSettlementSettlementTermsSchema } from './CdmProductCommonSettlementSettlementTerms';
import { CdmProductTemplateCalculationScheduleSchema } from './CdmProductTemplateCalculationSchedule';
import { CdmProductTemplateUnderlierSchema } from './CdmProductTemplateUnderlier';

export const CdmProductTemplateSettlementPayoutSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/SettlementPayout']
  )(
    z.object({
      delivery: z
        .lazy((): z.ZodTypeAny => CdmProductAssetAssetDeliveryInformationSchema)
        .optional(),
      deliveryTerm: z.string().optional(),
      description: z.string().optional(),
      name: z.string().optional(),
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
      underlier: z.lazy((): z.ZodTypeAny => CdmProductTemplateUnderlierSchema),
    })
  );

export type CdmProductTemplateSettlementPayout = z.infer<
  typeof CdmProductTemplateSettlementPayoutSchema
>;
