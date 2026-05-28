import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyAncillaryRoleEnumSchema } from './CdmBaseStaticdataPartyAncillaryRoleEnum';
import { CdmBaseStaticdataPartyCounterpartyRoleEnumSchema } from './CdmBaseStaticdataPartyCounterpartyRoleEnum';
import { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaParty';

export const CdmBaseStaticdataPartyAncillaryPartySchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/party/AncillaryParty']
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      onBehalfOf: z
        .lazy(() => CdmBaseStaticdataPartyCounterpartyRoleEnumSchema)
        .optional(),
      partyReference: z
        .array(
          z.lazy(
            () => CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema
          )
        )
        .min(1)
        .optional(),
      role: z.lazy(() => CdmBaseStaticdataPartyAncillaryRoleEnumSchema),
    })
  );

export type CdmBaseStaticdataPartyAncillaryParty = z.infer<
  typeof CdmBaseStaticdataPartyAncillaryPartySchema
>;
