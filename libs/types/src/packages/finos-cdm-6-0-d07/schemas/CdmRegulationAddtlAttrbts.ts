import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmRegulationAddtlAttrbtsSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/AddtlAttrbts']
)(
  z.object({
    name: z.string().optional(),
    rskRdcgTx: z.string(),
    sctiesFincgTxInd: z.string(),
  })
);

export type CdmRegulationAddtlAttrbts = z.infer<
  typeof CdmRegulationAddtlAttrbtsSchema
>;
