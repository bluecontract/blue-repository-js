import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmLegaldocumentationMasterClauseSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/legaldocumentation/master/Clause']
)(
  zod.object({
    description: zod.string().optional(),
    identifier: zod.string().optional(),
    name: zod.string().optional(),
    subcomponents: zod
      .array(
        zod.lazy((): z.ZodTypeAny => CdmLegaldocumentationMasterClauseSchema)
      )
      .min(0)
      .optional(),
    terms: zod.string().optional(),
  })
);

export type CdmLegaldocumentationMasterClause = z.infer<
  typeof CdmLegaldocumentationMasterClauseSchema
>;
