import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmRegulationAddtlAttrbtsSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/AddtlAttrbts']
)(
  zod.object({
    name: zod.string().optional(),
    rskRdcgTx: zod.string(),
    sctiesFincgTxInd: zod.string(),
  })
);

export type CdmRegulationAddtlAttrbts = z.infer<
  typeof CdmRegulationAddtlAttrbtsSchema
>;
