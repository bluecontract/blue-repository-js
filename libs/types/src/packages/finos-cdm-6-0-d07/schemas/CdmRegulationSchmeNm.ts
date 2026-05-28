import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmRegulationSchmeNmSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/SchmeNm']
)(
  z.object({
    name: z.string().optional(),
    prtry: z.string(),
  })
);

export type CdmRegulationSchmeNm = z.infer<typeof CdmRegulationSchmeNmSchema>;
