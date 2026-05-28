import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmRegulationPricSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/Pric']
)(
  z.object({
    bsisPts: z.string(),
    name: z.string().optional(),
    pric: z.lazy((): z.ZodTypeAny => CdmRegulationPricSchema),
  })
);

export type CdmRegulationPric = z.infer<typeof CdmRegulationPricSchema>;
