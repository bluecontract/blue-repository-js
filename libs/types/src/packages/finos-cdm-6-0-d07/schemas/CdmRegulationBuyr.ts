import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmRegulationAcctOwnrSchema } from './CdmRegulationAcctOwnr';

export const CdmRegulationBuyrSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/Buyr']
)(
  z.object({
    acctOwnr: z.lazy(() => CdmRegulationAcctOwnrSchema),
    name: z.string().optional(),
  })
);

export type CdmRegulationBuyr = z.infer<typeof CdmRegulationBuyrSchema>;
