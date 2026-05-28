import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmRegulationOthrSchema } from './CdmRegulationOthr';

export const CdmRegulationPrsnSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/Prsn']
)(
  z.object({
    ctryOfBrnch: z.string(),
    name: z.string().optional(),
    othr: z.lazy(() => CdmRegulationOthrSchema),
  })
);

export type CdmRegulationPrsn = z.infer<typeof CdmRegulationPrsnSchema>;
