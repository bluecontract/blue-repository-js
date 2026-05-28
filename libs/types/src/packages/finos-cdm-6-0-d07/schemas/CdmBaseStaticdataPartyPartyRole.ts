import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaParty';
import { CdmBaseStaticdataPartyPartyRoleEnumSchema } from './CdmBaseStaticdataPartyPartyRoleEnum';

export const CdmBaseStaticdataPartyPartyRoleSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/party/PartyRole']
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      ownershipPartyReference: z
        .lazy(
          () => CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema
        )
        .optional(),
      partyReference: z.lazy(
        () => CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema
      ),
      role: z.lazy(() => CdmBaseStaticdataPartyPartyRoleEnumSchema),
    })
  );

export type CdmBaseStaticdataPartyPartyRole = z.infer<
  typeof CdmBaseStaticdataPartyPartyRoleSchema
>;
