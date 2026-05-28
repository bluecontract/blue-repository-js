import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableOrRelativeDateSchema } from './CdmBaseDatetimeAdjustableOrRelativeDate';
import { CdmBaseStaticdataPartyPartyReferencePayerReceiverSchema } from './CdmBaseStaticdataPartyPartyReferencePayerReceiver';
import { CdmObservableCommonTimeTypeEnumSchema } from './CdmObservableCommonTimeTypeEnum';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmObservableEventFeaturePaymentSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/event/FeaturePayment']
  )(
    z.object({
      amount: z.number().optional(),
      currency: z
        .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
        .optional(),
      description: z.string().optional(),
      levelPercentage: z.number().optional(),
      name: z.string().optional(),
      payerReceiver: z.lazy(
        () => CdmBaseStaticdataPartyPartyReferencePayerReceiverSchema
      ),
      paymentDate: z
        .lazy(() => CdmBaseDatetimeAdjustableOrRelativeDateSchema)
        .optional(),
      time: z.lazy(() => CdmObservableCommonTimeTypeEnumSchema).optional(),
    })
  );

export type CdmObservableEventFeaturePayment = z.infer<
  typeof CdmObservableEventFeaturePaymentSchema
>;
