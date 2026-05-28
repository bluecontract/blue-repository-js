import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmRegulationIdSchema } from './CdmRegulationId';

export const CdmRegulationAcctOwnrSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/AcctOwnr']
)(
  z.object({
    id: z.lazy(() => CdmRegulationIdSchema),
    name: z.string().optional(),
  })
);

export type CdmRegulationAcctOwnr = z.infer<typeof CdmRegulationAcctOwnrSchema>;
