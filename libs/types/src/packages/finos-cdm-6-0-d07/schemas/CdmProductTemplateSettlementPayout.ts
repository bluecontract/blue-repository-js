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

const zod = z as any;

export const CdmProductTemplateSettlementPayoutSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/SettlementPayout']
)(
  zod.object({
    delivery: zod
      .lazy((): z.ZodTypeAny => CdmProductAssetAssetDeliveryInformationSchema)
      .optional(),
    deliveryTerm: zod.string().optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
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
    underlier: zod.lazy((): z.ZodTypeAny => CdmProductTemplateUnderlierSchema),
  })
);

export type CdmProductTemplateSettlementPayout = z.infer<
  typeof CdmProductTemplateSettlementPayoutSchema
>;
