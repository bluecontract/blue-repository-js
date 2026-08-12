import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyPartyIdentifierTypeEnumSchema } from './CdmBaseStaticdataPartyPartyIdentifierTypeEnum';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

const zod = z as any;

export const CdmBaseStaticdataPartyPartyIdentifierSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/party/PartyIdentifier']
)(
  zod.object({
    description: zod.string().optional(),
    identifier: zod.lazy(() => ComRosettaModelFieldWithMetaStringSchema),
    identifierType: zod
      .lazy(() => CdmBaseStaticdataPartyPartyIdentifierTypeEnumSchema)
      .optional(),
    name: zod.string().optional(),
  })
);

export type CdmBaseStaticdataPartyPartyIdentifier = z.infer<
  typeof CdmBaseStaticdataPartyPartyIdentifierSchema
>;
