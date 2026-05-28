import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmRegulationIdSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/Id']
)(
  z.object({
    lei: z.string(),
    name: z.string().optional(),
  })
);

export type CdmRegulationId = z.infer<typeof CdmRegulationIdSchema>;
