import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmRegulationSnglSchema } from './CdmRegulationSngl';

export const CdmRegulationSwpInSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/SwpIn']
)(
  z.object({
    name: z.string().optional(),
    sngl: z.lazy(() => CdmRegulationSnglSchema),
  })
);

export type CdmRegulationSwpIn = z.infer<typeof CdmRegulationSwpInSchema>;
