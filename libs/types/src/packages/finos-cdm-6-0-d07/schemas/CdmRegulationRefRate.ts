import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmRegulationRefRateSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/RefRate']
)(
  zod.object({
    indx: zod.string(),
    name: zod.string().optional(),
    nm: zod.string(),
  })
);

export type CdmRegulationRefRate = z.infer<typeof CdmRegulationRefRateSchema>;
