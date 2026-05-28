import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmRegulationOrdrTrnsmssnSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/OrdrTrnsmssn']
)(
  z.object({
    name: z.string().optional(),
    trnsmssnInd: z.string(),
  })
);

export type CdmRegulationOrdrTrnsmssn = z.infer<
  typeof CdmRegulationOrdrTrnsmssnSchema
>;
