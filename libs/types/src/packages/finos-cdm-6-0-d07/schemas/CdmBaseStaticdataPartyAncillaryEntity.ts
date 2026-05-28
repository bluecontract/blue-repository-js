import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyAncillaryRoleEnumSchema } from './CdmBaseStaticdataPartyAncillaryRoleEnum';
import { CdmBaseStaticdataPartyLegalEntitySchema } from './CdmBaseStaticdataPartyLegalEntity';

export const CdmBaseStaticdataPartyAncillaryEntitySchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/party/AncillaryEntity']
  )(
    z.object({
      ancillaryParty: z
        .lazy(() => CdmBaseStaticdataPartyAncillaryRoleEnumSchema)
        .optional(),
      description: z.string().optional(),
      legalEntity: z
        .lazy(() => CdmBaseStaticdataPartyLegalEntitySchema)
        .optional(),
      name: z.string().optional(),
    })
  );

export type CdmBaseStaticdataPartyAncillaryEntity = z.infer<
  typeof CdmBaseStaticdataPartyAncillaryEntitySchema
>;
