import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmRegulationUndrlygInstrmSchema } from './CdmRegulationUndrlygInstrm';

const zod = z as any;

export const CdmRegulationDerivInstrmAttrbtsSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/DerivInstrmAttrbts']
)(
  zod.object({
    dlvryTp: zod.string(),
    name: zod.string().optional(),
    pricMltplr: zod.string(),
    undrlygInstrm: zod.lazy(() => CdmRegulationUndrlygInstrmSchema),
    xpryDt: zod.string(),
  })
);

export type CdmRegulationDerivInstrmAttrbts = z.infer<
  typeof CdmRegulationDerivInstrmAttrbtsSchema
>;
