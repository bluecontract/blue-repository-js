import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmRegulationQtySchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/Qty']
)(
  z.object({
    name: z.string().optional(),
    unit: z.string(),
  })
);

export type CdmRegulationQty = z.infer<typeof CdmRegulationQtySchema>;
