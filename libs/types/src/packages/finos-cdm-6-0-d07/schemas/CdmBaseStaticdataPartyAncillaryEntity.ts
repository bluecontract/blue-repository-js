import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyAncillaryRoleEnumSchema } from './CdmBaseStaticdataPartyAncillaryRoleEnum';
import { CdmBaseStaticdataPartyLegalEntitySchema } from './CdmBaseStaticdataPartyLegalEntity';

const zod = z as any;

export const CdmBaseStaticdataPartyAncillaryEntitySchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/party/AncillaryEntity']
)(
  zod.object({
    ancillaryParty: zod
      .lazy(() => CdmBaseStaticdataPartyAncillaryRoleEnumSchema)
      .optional(),
    description: zod.string().optional(),
    legalEntity: zod
      .lazy(() => CdmBaseStaticdataPartyLegalEntitySchema)
      .optional(),
    name: zod.string().optional(),
  })
);

export type CdmBaseStaticdataPartyAncillaryEntity = z.infer<
  typeof CdmBaseStaticdataPartyAncillaryEntitySchema
>;
