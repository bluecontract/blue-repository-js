import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaAccountSchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaAccount';
import { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaParty';
import { CdmBaseStaticdataPartyPartyRoleEnumSchema } from './CdmBaseStaticdataPartyPartyRoleEnum';

const zod = z as any;

export const CdmBaseStaticdataPartyRelatedPartySchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/party/RelatedParty']
)(
  zod.object({
    accountReference: zod
      .lazy(
        () => CdmBaseStaticdataPartyMetafieldsReferenceWithMetaAccountSchema
      )
      .optional(),
    name: zod.string().optional(),
    partyReference: zod.lazy(
      () => CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema
    ),
    role: zod.lazy(() => CdmBaseStaticdataPartyPartyRoleEnumSchema),
  })
);

export type CdmBaseStaticdataPartyRelatedParty = z.infer<
  typeof CdmBaseStaticdataPartyRelatedPartySchema
>;
