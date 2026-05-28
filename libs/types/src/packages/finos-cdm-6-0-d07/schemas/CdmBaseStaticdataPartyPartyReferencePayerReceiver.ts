import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaAccountSchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaAccount';
import { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaParty';

export const CdmBaseStaticdataPartyPartyReferencePayerReceiverSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/party/PartyReferencePayerReceiver'
    ]
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      payerAccountReference: z
        .lazy(
          () => CdmBaseStaticdataPartyMetafieldsReferenceWithMetaAccountSchema
        )
        .optional(),
      payerPartyReference: z.lazy(
        () => CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema
      ),
      receiverAccountReference: z
        .lazy(
          () => CdmBaseStaticdataPartyMetafieldsReferenceWithMetaAccountSchema
        )
        .optional(),
      receiverPartyReference: z.lazy(
        () => CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema
      ),
    })
  );

export type CdmBaseStaticdataPartyPartyReferencePayerReceiver = z.infer<
  typeof CdmBaseStaticdataPartyPartyReferencePayerReceiverSchema
>;
