import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmRegulationDerivInstrmAttrbtsSchema } from './CdmRegulationDerivInstrmAttrbts';
import { CdmRegulationFinInstrmGnlAttrbtsSchema } from './CdmRegulationFinInstrmGnlAttrbts';
import { CdmRegulationSchmeNmSchema } from './CdmRegulationSchmeNm';

const zod = z as any;

export const CdmRegulationOthrSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/Othr']
)(
  zod.object({
    derivInstrmAttrbts: zod.lazy(() => CdmRegulationDerivInstrmAttrbtsSchema),
    finInstrmGnlAttrbts: zod.lazy(() => CdmRegulationFinInstrmGnlAttrbtsSchema),
    id: zod.string(),
    name: zod.string().optional(),
    schmeNm: zod.lazy(() => CdmRegulationSchmeNmSchema),
  })
);

export type CdmRegulationOthr = z.infer<typeof CdmRegulationOthrSchema>;
