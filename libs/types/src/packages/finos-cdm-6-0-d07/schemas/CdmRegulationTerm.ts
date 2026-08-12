import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmRegulationTermSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/Term']
)(
  zod.object({
    name: zod.string().optional(),
    unit: zod.string(),
    val: zod.string(),
  })
);

export type CdmRegulationTerm = z.infer<typeof CdmRegulationTermSchema>;
