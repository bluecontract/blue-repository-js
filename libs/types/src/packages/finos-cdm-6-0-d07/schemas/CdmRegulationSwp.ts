import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmRegulationSwpInSchema } from './CdmRegulationSwpIn';
import { CdmRegulationSwpOutSchema } from './CdmRegulationSwpOut';

const zod = z as any;

export const CdmRegulationSwpSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/Swp']
)(
  zod.object({
    name: zod.string().optional(),
    swpIn: zod.lazy(() => CdmRegulationSwpInSchema),
    swpOut: zod.lazy(() => CdmRegulationSwpOutSchema),
  })
);

export type CdmRegulationSwp = z.infer<typeof CdmRegulationSwpSchema>;
