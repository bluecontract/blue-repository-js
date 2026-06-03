import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmRegulationOthrSchema } from './CdmRegulationOthr';

const zod = z as any;

export const CdmRegulationFinInstrmSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/FinInstrm']
)(
  zod.object({
    name: zod.string().optional(),
    othr: zod.lazy(() => CdmRegulationOthrSchema),
  })
);

export type CdmRegulationFinInstrm = z.infer<
  typeof CdmRegulationFinInstrmSchema
>;
