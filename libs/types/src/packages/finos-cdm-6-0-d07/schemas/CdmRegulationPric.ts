import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmRegulationPricSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/Pric']
)(
  zod.object({
    bsisPts: zod.string(),
    name: zod.string().optional(),
    pric: zod.lazy((): z.ZodTypeAny => CdmRegulationPricSchema),
  })
);

export type CdmRegulationPric = z.infer<typeof CdmRegulationPricSchema>;
