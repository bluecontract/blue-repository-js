import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

const zod = z as any;

export const CdmBaseStaticdataPartyLegalEntitySchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/party/LegalEntity']
)(
  zod.object({
    description: zod.string().optional(),
    entityId: zod
      .array(zod.lazy(() => ComRosettaModelFieldWithMetaStringSchema))
      .min(0)
      .optional(),
    name: zod.string().optional(),
  })
);

export type CdmBaseStaticdataPartyLegalEntity = z.infer<
  typeof CdmBaseStaticdataPartyLegalEntitySchema
>;
