import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmRegulationOthrSchema } from './CdmRegulationOthr';

const zod = z as any;

export const CdmRegulationPrsnSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/Prsn']
)(
  zod.object({
    ctryOfBrnch: zod.string(),
    name: zod.string().optional(),
    othr: zod.lazy(() => CdmRegulationOthrSchema),
  })
);

export type CdmRegulationPrsn = z.infer<typeof CdmRegulationPrsnSchema>;
