import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmBaseStaticdataPartyReferenceBankSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/party/ReferenceBank']
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      referenceBankId: z.lazy(() => ComRosettaModelFieldWithMetaStringSchema),
      referenceBankName: z.string().optional(),
    })
  );

export type CdmBaseStaticdataPartyReferenceBank = z.infer<
  typeof CdmBaseStaticdataPartyReferenceBankSchema
>;
