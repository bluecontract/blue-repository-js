import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyPersonIdentifierTypeEnumSchema } from './CdmBaseStaticdataPartyPersonIdentifierTypeEnum';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

const zod = z as any;

export const CdmBaseStaticdataPartyPersonIdentifierSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/party/PersonIdentifier']
)(
  zod.object({
    country: zod
      .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
      .optional(),
    description: zod.string().optional(),
    identifier: zod.lazy(() => ComRosettaModelFieldWithMetaStringSchema),
    identifierType: zod
      .lazy(() => CdmBaseStaticdataPartyPersonIdentifierTypeEnumSchema)
      .optional(),
    name: zod.string().optional(),
  })
);

export type CdmBaseStaticdataPartyPersonIdentifier = z.infer<
  typeof CdmBaseStaticdataPartyPersonIdentifierSchema
>;
