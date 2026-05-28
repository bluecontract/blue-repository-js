import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmRegulationAcctOwnrSchema } from './CdmRegulationAcctOwnr';

export const CdmRegulationSellrSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/Sellr']
)(
  z.object({
    acctOwnr: z.lazy(() => CdmRegulationAcctOwnrSchema),
    name: z.string().optional(),
  })
);

export type CdmRegulationSellr = z.infer<typeof CdmRegulationSellrSchema>;
