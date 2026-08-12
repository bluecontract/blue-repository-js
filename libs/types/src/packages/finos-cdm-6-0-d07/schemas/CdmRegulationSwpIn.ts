import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmRegulationSnglSchema } from './CdmRegulationSngl';

const zod = z as any;

export const CdmRegulationSwpInSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/SwpIn']
)(
  zod.object({
    name: zod.string().optional(),
    sngl: zod.lazy(() => CdmRegulationSnglSchema),
  })
);

export type CdmRegulationSwpIn = z.infer<typeof CdmRegulationSwpInSchema>;
