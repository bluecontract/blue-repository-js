import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmRegulationAcctOwnrSchema } from './CdmRegulationAcctOwnr';

const zod = z as any;

export const CdmRegulationBuyrSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/Buyr']
)(
  zod.object({
    acctOwnr: zod.lazy(() => CdmRegulationAcctOwnrSchema),
    name: zod.string().optional(),
  })
);

export type CdmRegulationBuyr = z.infer<typeof CdmRegulationBuyrSchema>;
