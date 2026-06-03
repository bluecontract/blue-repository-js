import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmRegulationAcctOwnrSchema } from './CdmRegulationAcctOwnr';

const zod = z as any;

export const CdmRegulationSellrSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/Sellr']
)(
  zod.object({
    acctOwnr: zod.lazy(() => CdmRegulationAcctOwnrSchema),
    name: zod.string().optional(),
  })
);

export type CdmRegulationSellr = z.infer<typeof CdmRegulationSellrSchema>;
