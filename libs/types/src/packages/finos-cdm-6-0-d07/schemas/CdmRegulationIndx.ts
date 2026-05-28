import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmRegulationNmSchema } from './CdmRegulationNm';

export const CdmRegulationIndxSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/Indx']
)(
  z.object({
    name: z.string().optional(),
    nm: z.lazy(() => CdmRegulationNmSchema),
  })
);

export type CdmRegulationIndx = z.infer<typeof CdmRegulationIndxSchema>;
