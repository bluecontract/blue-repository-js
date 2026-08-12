import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmRegulationNmSchema } from './CdmRegulationNm';

const zod = z as any;

export const CdmRegulationIndxSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/Indx']
)(
  zod.object({
    name: zod.string().optional(),
    nm: zod.lazy(() => CdmRegulationNmSchema),
  })
);

export type CdmRegulationIndx = z.infer<typeof CdmRegulationIndxSchema>;
