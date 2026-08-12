import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaAccountSchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaAccount';
import { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaParty';

const zod = z as any;

export const CdmBaseStaticdataPartyPartyReferencePayerReceiverSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/party/PartyReferencePayerReceiver'
    ]
  )(
    zod.object({
      description: zod.string().optional(),
      name: zod.string().optional(),
      payerAccountReference: zod
        .lazy(
          () => CdmBaseStaticdataPartyMetafieldsReferenceWithMetaAccountSchema
        )
        .optional(),
      payerPartyReference: zod.lazy(
        () => CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema
      ),
      receiverAccountReference: zod
        .lazy(
          () => CdmBaseStaticdataPartyMetafieldsReferenceWithMetaAccountSchema
        )
        .optional(),
      receiverPartyReference: zod.lazy(
        () => CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema
      ),
    })
  );

export type CdmBaseStaticdataPartyPartyReferencePayerReceiver = z.infer<
  typeof CdmBaseStaticdataPartyPartyReferencePayerReceiverSchema
>;
