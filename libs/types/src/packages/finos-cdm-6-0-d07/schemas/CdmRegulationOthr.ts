import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmRegulationDerivInstrmAttrbtsSchema } from './CdmRegulationDerivInstrmAttrbts';
import { CdmRegulationFinInstrmGnlAttrbtsSchema } from './CdmRegulationFinInstrmGnlAttrbts';
import { CdmRegulationSchmeNmSchema } from './CdmRegulationSchmeNm';

export const CdmRegulationOthrSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/Othr']
)(
  z.object({
    derivInstrmAttrbts: z.lazy(() => CdmRegulationDerivInstrmAttrbtsSchema),
    finInstrmGnlAttrbts: z.lazy(() => CdmRegulationFinInstrmGnlAttrbtsSchema),
    id: z.string(),
    name: z.string().optional(),
    schmeNm: z.lazy(() => CdmRegulationSchmeNmSchema),
  })
);

export type CdmRegulationOthr = z.infer<typeof CdmRegulationOthrSchema>;
