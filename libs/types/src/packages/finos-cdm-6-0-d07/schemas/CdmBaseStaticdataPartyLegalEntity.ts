import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmBaseStaticdataPartyLegalEntitySchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/party/LegalEntity']
  )(
    z.object({
      description: z.string().optional(),
      entityId: z
        .array(z.lazy(() => ComRosettaModelFieldWithMetaStringSchema))
        .min(0)
        .optional(),
      name: z.string().optional(),
    })
  );

export type CdmBaseStaticdataPartyLegalEntity = z.infer<
  typeof CdmBaseStaticdataPartyLegalEntitySchema
>;
