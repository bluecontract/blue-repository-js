import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmRegulationRefRateSchema } from './CdmRegulationRefRate';
import { CdmRegulationTermSchema } from './CdmRegulationTerm';

const zod = z as any;

export const CdmRegulationNmSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/Nm']
)(
  zod.object({
    name: zod.string().optional(),
    refRate: zod.lazy(() => CdmRegulationRefRateSchema),
    term: zod.lazy(() => CdmRegulationTermSchema),
  })
);

export type CdmRegulationNm = z.infer<typeof CdmRegulationNmSchema>;
