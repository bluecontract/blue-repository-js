import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableOrRelativeDateSchema } from './CdmBaseDatetimeAdjustableOrRelativeDate';
import { CdmBaseStaticdataPartyPartyReferencePayerReceiverSchema } from './CdmBaseStaticdataPartyPartyReferencePayerReceiver';
import { CdmObservableCommonTimeTypeEnumSchema } from './CdmObservableCommonTimeTypeEnum';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

const zod = z as any;

export const CdmObservableEventFeaturePaymentSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/event/FeaturePayment']
)(
  zod.object({
    amount: zod.number().optional(),
    currency: zod
      .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
      .optional(),
    description: zod.string().optional(),
    levelPercentage: zod.number().optional(),
    name: zod.string().optional(),
    payerReceiver: zod.lazy(
      () => CdmBaseStaticdataPartyPartyReferencePayerReceiverSchema
    ),
    paymentDate: zod
      .lazy(() => CdmBaseDatetimeAdjustableOrRelativeDateSchema)
      .optional(),
    time: zod.lazy(() => CdmObservableCommonTimeTypeEnumSchema).optional(),
  })
);

export type CdmObservableEventFeaturePayment = z.infer<
  typeof CdmObservableEventFeaturePaymentSchema
>;
