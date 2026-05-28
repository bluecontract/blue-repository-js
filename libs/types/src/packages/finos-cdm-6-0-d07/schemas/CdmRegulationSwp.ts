import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmRegulationSwpInSchema } from './CdmRegulationSwpIn';
import { CdmRegulationSwpOutSchema } from './CdmRegulationSwpOut';

export const CdmRegulationSwpSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/Swp']
)(
  z.object({
    name: z.string().optional(),
    swpIn: z.lazy(() => CdmRegulationSwpInSchema),
    swpOut: z.lazy(() => CdmRegulationSwpOutSchema),
  })
);

export type CdmRegulationSwp = z.infer<typeof CdmRegulationSwpSchema>;
