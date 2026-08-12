import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmRegulationOrdrTrnsmssnSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/OrdrTrnsmssn']
)(
  zod.object({
    name: zod.string().optional(),
    trnsmssnInd: zod.string(),
  })
);

export type CdmRegulationOrdrTrnsmssn = z.infer<
  typeof CdmRegulationOrdrTrnsmssnSchema
>;
