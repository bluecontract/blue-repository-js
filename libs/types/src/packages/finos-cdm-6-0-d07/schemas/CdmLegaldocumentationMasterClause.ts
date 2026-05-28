import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmLegaldocumentationMasterClauseSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/legaldocumentation/master/Clause']
  )(
    z.object({
      description: z.string().optional(),
      identifier: z.string().optional(),
      name: z.string().optional(),
      subcomponents: z
        .array(
          z.lazy((): z.ZodTypeAny => CdmLegaldocumentationMasterClauseSchema)
        )
        .min(0)
        .optional(),
      terms: z.string().optional(),
    })
  );

export type CdmLegaldocumentationMasterClause = z.infer<
  typeof CdmLegaldocumentationMasterClauseSchema
>;
