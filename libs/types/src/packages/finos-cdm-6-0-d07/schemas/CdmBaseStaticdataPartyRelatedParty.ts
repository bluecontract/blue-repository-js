import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaAccountSchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaAccount';
import { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaParty';
import { CdmBaseStaticdataPartyPartyRoleEnumSchema } from './CdmBaseStaticdataPartyPartyRoleEnum';

export const CdmBaseStaticdataPartyRelatedPartySchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/party/RelatedParty']
  )(
    z.object({
      accountReference: z
        .lazy(
          () => CdmBaseStaticdataPartyMetafieldsReferenceWithMetaAccountSchema
        )
        .optional(),
      name: z.string().optional(),
      partyReference: z.lazy(
        () => CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema
      ),
      role: z.lazy(() => CdmBaseStaticdataPartyPartyRoleEnumSchema),
    })
  );

export type CdmBaseStaticdataPartyRelatedParty = z.infer<
  typeof CdmBaseStaticdataPartyRelatedPartySchema
>;
