import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmRegulationIndxSchema } from './CdmRegulationIndx';

export const CdmRegulationSnglSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/Sngl']
)(
  z.object({
    indx: z.lazy(() => CdmRegulationIndxSchema),
    isin: z.string(),
    name: z.string().optional(),
  })
);

export type CdmRegulationSngl = z.infer<typeof CdmRegulationSnglSchema>;
