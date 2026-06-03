import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmRegulationSwpSchema } from './CdmRegulationSwp';

const zod = z as any;

export const CdmRegulationUndrlygInstrmSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/UndrlygInstrm']
)(
  zod.object({
    name: zod.string().optional(),
    swp: zod.lazy(() => CdmRegulationSwpSchema),
  })
);

export type CdmRegulationUndrlygInstrm = z.infer<
  typeof CdmRegulationUndrlygInstrmSchema
>;
