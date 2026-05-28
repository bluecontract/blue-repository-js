import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmRegulationPrsnSchema } from './CdmRegulationPrsn';

export const CdmRegulationExctgPrsnSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/ExctgPrsn']
)(
  z.object({
    name: z.string().optional(),
    prsn: z.lazy(() => CdmRegulationPrsnSchema),
  })
);

export type CdmRegulationExctgPrsn = z.infer<
  typeof CdmRegulationExctgPrsnSchema
>;
