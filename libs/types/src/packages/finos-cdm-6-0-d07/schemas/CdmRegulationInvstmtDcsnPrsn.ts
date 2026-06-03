import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmRegulationPrsnSchema } from './CdmRegulationPrsn';

const zod = z as any;

export const CdmRegulationInvstmtDcsnPrsnSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/InvstmtDcsnPrsn']
)(
  zod.object({
    name: zod.string().optional(),
    prsn: zod.lazy(() => CdmRegulationPrsnSchema),
  })
);

export type CdmRegulationInvstmtDcsnPrsn = z.infer<
  typeof CdmRegulationInvstmtDcsnPrsnSchema
>;
