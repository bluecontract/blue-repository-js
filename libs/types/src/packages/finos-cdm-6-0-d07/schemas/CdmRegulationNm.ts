import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmRegulationRefRateSchema } from './CdmRegulationRefRate';
import { CdmRegulationTermSchema } from './CdmRegulationTerm';

export const CdmRegulationNmSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/Nm']
)(
  z.object({
    name: z.string().optional(),
    refRate: z.lazy(() => CdmRegulationRefRateSchema),
    term: z.lazy(() => CdmRegulationTermSchema),
  })
);

export type CdmRegulationNm = z.infer<typeof CdmRegulationNmSchema>;
