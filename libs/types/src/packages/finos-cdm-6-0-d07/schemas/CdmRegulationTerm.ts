import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmRegulationTermSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/Term']
)(
  z.object({
    name: z.string().optional(),
    unit: z.string(),
    val: z.string(),
  })
);

export type CdmRegulationTerm = z.infer<typeof CdmRegulationTermSchema>;
