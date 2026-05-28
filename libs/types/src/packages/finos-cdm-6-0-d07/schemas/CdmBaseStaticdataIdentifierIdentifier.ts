import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataIdentifierAssignedIdentifierSchema } from './CdmBaseStaticdataIdentifierAssignedIdentifier';
import { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaParty';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmBaseStaticdataIdentifierIdentifierSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/identifier/Identifier']
  )(
    z.object({
      assignedIdentifier: z
        .array(
          z.lazy(() => CdmBaseStaticdataIdentifierAssignedIdentifierSchema)
        )
        .min(1)
        .optional(),
      description: z.string().optional(),
      issuer: z.lazy(() => ComRosettaModelFieldWithMetaStringSchema).optional(),
      issuerReference: z
        .lazy(
          () => CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema
        )
        .optional(),
      name: z.string().optional(),
    })
  );

export type CdmBaseStaticdataIdentifierIdentifier = z.infer<
  typeof CdmBaseStaticdataIdentifierIdentifierSchema
>;
