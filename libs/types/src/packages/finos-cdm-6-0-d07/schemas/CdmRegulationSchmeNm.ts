import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmRegulationSchmeNmSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/SchmeNm']
)(
  zod.object({
    name: zod.string().optional(),
    prtry: zod.string(),
  })
);

export type CdmRegulationSchmeNm = z.infer<typeof CdmRegulationSchmeNmSchema>;
