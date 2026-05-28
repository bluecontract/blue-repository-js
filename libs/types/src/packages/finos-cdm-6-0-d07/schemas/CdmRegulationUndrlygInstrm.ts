import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmRegulationSwpSchema } from './CdmRegulationSwp';

export const CdmRegulationUndrlygInstrmSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/UndrlygInstrm']
)(
  z.object({
    name: z.string().optional(),
    swp: z.lazy(() => CdmRegulationSwpSchema),
  })
);

export type CdmRegulationUndrlygInstrm = z.infer<
  typeof CdmRegulationUndrlygInstrmSchema
>;
