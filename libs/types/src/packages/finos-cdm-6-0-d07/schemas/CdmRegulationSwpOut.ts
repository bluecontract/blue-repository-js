import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmRegulationSnglSchema } from './CdmRegulationSngl';

export const CdmRegulationSwpOutSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/SwpOut']
)(
  z.object({
    name: z.string().optional(),
    sngl: z.lazy(() => CdmRegulationSnglSchema),
  })
);

export type CdmRegulationSwpOut = z.infer<typeof CdmRegulationSwpOutSchema>;
