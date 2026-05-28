import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmRegulationOthrSchema } from './CdmRegulationOthr';

export const CdmRegulationFinInstrmSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/FinInstrm']
)(
  z.object({
    name: z.string().optional(),
    othr: z.lazy(() => CdmRegulationOthrSchema),
  })
);

export type CdmRegulationFinInstrm = z.infer<
  typeof CdmRegulationFinInstrmSchema
>;
