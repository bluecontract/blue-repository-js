import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyAncillaryRoleEnumSchema } from './CdmBaseStaticdataPartyAncillaryRoleEnum';
import { CdmBaseStaticdataPartyCounterpartyRoleEnumSchema } from './CdmBaseStaticdataPartyCounterpartyRoleEnum';
import { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaParty';

const zod = z as any;

export const CdmBaseStaticdataPartyAncillaryPartySchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/party/AncillaryParty']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    onBehalfOf: zod
      .lazy(() => CdmBaseStaticdataPartyCounterpartyRoleEnumSchema)
      .optional(),
    partyReference: zod
      .array(
        zod.lazy(
          () => CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema
        )
      )
      .min(1)
      .optional(),
    role: zod.lazy(() => CdmBaseStaticdataPartyAncillaryRoleEnumSchema),
  })
);

export type CdmBaseStaticdataPartyAncillaryParty = z.infer<
  typeof CdmBaseStaticdataPartyAncillaryPartySchema
>;
