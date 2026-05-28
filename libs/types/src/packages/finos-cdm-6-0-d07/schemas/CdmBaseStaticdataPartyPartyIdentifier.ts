import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyPartyIdentifierTypeEnumSchema } from './CdmBaseStaticdataPartyPartyIdentifierTypeEnum';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmBaseStaticdataPartyPartyIdentifierSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/party/PartyIdentifier']
  )(
    z.object({
      description: z.string().optional(),
      identifier: z.lazy(() => ComRosettaModelFieldWithMetaStringSchema),
      identifierType: z
        .lazy(() => CdmBaseStaticdataPartyPartyIdentifierTypeEnumSchema)
        .optional(),
      name: z.string().optional(),
    })
  );

export type CdmBaseStaticdataPartyPartyIdentifier = z.infer<
  typeof CdmBaseStaticdataPartyPartyIdentifierSchema
>;
