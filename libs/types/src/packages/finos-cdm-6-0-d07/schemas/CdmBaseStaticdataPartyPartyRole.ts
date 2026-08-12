import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaParty';
import { CdmBaseStaticdataPartyPartyRoleEnumSchema } from './CdmBaseStaticdataPartyPartyRoleEnum';

const zod = z as any;

export const CdmBaseStaticdataPartyPartyRoleSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/party/PartyRole']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    ownershipPartyReference: zod
      .lazy(() => CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema)
      .optional(),
    partyReference: zod.lazy(
      () => CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema
    ),
    role: zod.lazy(() => CdmBaseStaticdataPartyPartyRoleEnumSchema),
  })
);

export type CdmBaseStaticdataPartyPartyRole = z.infer<
  typeof CdmBaseStaticdataPartyPartyRoleSchema
>;
