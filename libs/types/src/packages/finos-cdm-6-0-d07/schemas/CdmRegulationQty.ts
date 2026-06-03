import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmRegulationQtySchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/Qty']
)(
  zod.object({
    name: zod.string().optional(),
    unit: zod.string(),
  })
);

export type CdmRegulationQty = z.infer<typeof CdmRegulationQtySchema>;
