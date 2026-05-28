import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyCounterpartyRoleEnumSchema } from './CdmBaseStaticdataPartyCounterpartyRoleEnum';
import { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaParty';

export const CdmBaseStaticdataPartyCounterpartySchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/party/Counterparty']
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      partyReference: z.lazy(
        () => CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema
      ),
      role: z.lazy(() => CdmBaseStaticdataPartyCounterpartyRoleEnumSchema),
    })
  );

export type CdmBaseStaticdataPartyCounterparty = z.infer<
  typeof CdmBaseStaticdataPartyCounterpartySchema
>;
