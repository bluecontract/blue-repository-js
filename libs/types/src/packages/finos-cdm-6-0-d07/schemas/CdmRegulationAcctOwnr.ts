import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmRegulationIdSchema } from './CdmRegulationId';

const zod = z as any;

export const CdmRegulationAcctOwnrSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/AcctOwnr']
)(
  zod.object({
    id: zod.lazy(() => CdmRegulationIdSchema),
    name: zod.string().optional(),
  })
);

export type CdmRegulationAcctOwnr = z.infer<typeof CdmRegulationAcctOwnrSchema>;
