import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmRegulationIdSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/Id']
)(
  zod.object({
    lei: zod.string(),
    name: zod.string().optional(),
  })
);

export type CdmRegulationId = z.infer<typeof CdmRegulationIdSchema>;
