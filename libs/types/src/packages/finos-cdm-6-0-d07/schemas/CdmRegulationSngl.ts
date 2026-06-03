import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmRegulationIndxSchema } from './CdmRegulationIndx';

const zod = z as any;

export const CdmRegulationSnglSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/Sngl']
)(
  zod.object({
    indx: zod.lazy(() => CdmRegulationIndxSchema),
    isin: zod.string(),
    name: zod.string().optional(),
  })
);

export type CdmRegulationSngl = z.infer<typeof CdmRegulationSnglSchema>;
