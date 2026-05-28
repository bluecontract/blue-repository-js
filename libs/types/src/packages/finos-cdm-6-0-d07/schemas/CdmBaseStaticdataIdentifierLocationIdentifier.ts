import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataIdentifierAssignedIdentifierSchema } from './CdmBaseStaticdataIdentifierAssignedIdentifier';
import { CdmBaseStaticdataIdentifierCommodityLocationIdentifierTypeEnumSchema } from './CdmBaseStaticdataIdentifierCommodityLocationIdentifierTypeEnum';
import { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaParty';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmBaseStaticdataIdentifierLocationIdentifierSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/identifier/LocationIdentifier'
    ]
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
      locationIdentifierType: z
        .lazy(
          () =>
            CdmBaseStaticdataIdentifierCommodityLocationIdentifierTypeEnumSchema
        )
        .optional(),
      name: z.string().optional(),
    })
  );

export type CdmBaseStaticdataIdentifierLocationIdentifier = z.infer<
  typeof CdmBaseStaticdataIdentifierLocationIdentifierSchema
>;
