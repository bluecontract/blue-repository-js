import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmRegulationSnglSchema } from './CdmRegulationSngl';

const zod = z as any;

export const CdmRegulationSwpOutSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/SwpOut']
)(
  zod.object({
    name: zod.string().optional(),
    sngl: zod.lazy(() => CdmRegulationSnglSchema),
  })
);

export type CdmRegulationSwpOut = z.infer<typeof CdmRegulationSwpOutSchema>;
