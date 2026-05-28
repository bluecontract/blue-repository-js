import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmLegaldocumentationMasterRepresentationsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/legaldocumentation/master/Representations']
  )(
    z.object({
      name: z.string().optional(),
    })
  );

export type CdmLegaldocumentationMasterRepresentations = z.infer<
  typeof CdmLegaldocumentationMasterRepresentationsSchema
>;
