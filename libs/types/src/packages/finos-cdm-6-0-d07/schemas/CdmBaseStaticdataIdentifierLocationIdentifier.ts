import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataIdentifierAssignedIdentifierSchema } from './CdmBaseStaticdataIdentifierAssignedIdentifier';
import { CdmBaseStaticdataIdentifierCommodityLocationIdentifierTypeEnumSchema } from './CdmBaseStaticdataIdentifierCommodityLocationIdentifierTypeEnum';
import { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaParty';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

const zod = z as any;

export const CdmBaseStaticdataIdentifierLocationIdentifierSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/identifier/LocationIdentifier'
    ]
  )(
    zod.object({
      assignedIdentifier: zod
        .array(
          zod.lazy(() => CdmBaseStaticdataIdentifierAssignedIdentifierSchema)
        )
        .min(1)
        .optional(),
      description: zod.string().optional(),
      issuer: zod
        .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
        .optional(),
      issuerReference: zod
        .lazy(
          () => CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema
        )
        .optional(),
      locationIdentifierType: zod
        .lazy(
          () =>
            CdmBaseStaticdataIdentifierCommodityLocationIdentifierTypeEnumSchema
        )
        .optional(),
      name: zod.string().optional(),
    })
  );

export type CdmBaseStaticdataIdentifierLocationIdentifier = z.infer<
  typeof CdmBaseStaticdataIdentifierLocationIdentifierSchema
>;
