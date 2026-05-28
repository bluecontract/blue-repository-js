import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyPersonIdentifierTypeEnumSchema } from './CdmBaseStaticdataPartyPersonIdentifierTypeEnum';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmBaseStaticdataPartyPersonIdentifierSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/party/PersonIdentifier']
  )(
    z.object({
      country: z
        .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
        .optional(),
      description: z.string().optional(),
      identifier: z.lazy(() => ComRosettaModelFieldWithMetaStringSchema),
      identifierType: z
        .lazy(() => CdmBaseStaticdataPartyPersonIdentifierTypeEnumSchema)
        .optional(),
      name: z.string().optional(),
    })
  );

export type CdmBaseStaticdataPartyPersonIdentifier = z.infer<
  typeof CdmBaseStaticdataPartyPersonIdentifierSchema
>;
