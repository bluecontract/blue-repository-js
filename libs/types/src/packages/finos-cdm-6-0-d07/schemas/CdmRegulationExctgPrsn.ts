import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmRegulationPrsnSchema } from './CdmRegulationPrsn';

const zod = z as any;

export const CdmRegulationExctgPrsnSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/ExctgPrsn']
)(
  zod.object({
    name: zod.string().optional(),
    prsn: zod.lazy(() => CdmRegulationPrsnSchema),
  })
);

export type CdmRegulationExctgPrsn = z.infer<
  typeof CdmRegulationExctgPrsnSchema
>;
