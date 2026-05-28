import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmRegulationRefRateSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/RefRate']
)(
  z.object({
    indx: z.string(),
    name: z.string().optional(),
    nm: z.string(),
  })
);

export type CdmRegulationRefRate = z.infer<typeof CdmRegulationRefRateSchema>;
