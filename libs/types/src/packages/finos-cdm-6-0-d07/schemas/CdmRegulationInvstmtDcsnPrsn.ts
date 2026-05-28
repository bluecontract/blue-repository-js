import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmRegulationPrsnSchema } from './CdmRegulationPrsn';

export const CdmRegulationInvstmtDcsnPrsnSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/InvstmtDcsnPrsn']
)(
  z.object({
    name: z.string().optional(),
    prsn: z.lazy(() => CdmRegulationPrsnSchema),
  })
);

export type CdmRegulationInvstmtDcsnPrsn = z.infer<
  typeof CdmRegulationInvstmtDcsnPrsnSchema
>;
