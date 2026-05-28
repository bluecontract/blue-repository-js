import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmRegulationUndrlygInstrmSchema } from './CdmRegulationUndrlygInstrm';

export const CdmRegulationDerivInstrmAttrbtsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/regulation/DerivInstrmAttrbts']
  )(
    z.object({
      dlvryTp: z.string(),
      name: z.string().optional(),
      pricMltplr: z.string(),
      undrlygInstrm: z.lazy(() => CdmRegulationUndrlygInstrmSchema),
      xpryDt: z.string(),
    })
  );

export type CdmRegulationDerivInstrmAttrbts = z.infer<
  typeof CdmRegulationDerivInstrmAttrbtsSchema
>;
