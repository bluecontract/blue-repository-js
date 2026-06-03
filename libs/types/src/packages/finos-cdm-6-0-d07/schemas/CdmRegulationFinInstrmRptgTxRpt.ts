import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmRegulationTxSchema } from './CdmRegulationTx';

const zod = z as any;

export const CdmRegulationFinInstrmRptgTxRptSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/FinInstrmRptgTxRpt']
)(
  zod.object({
    name: zod.string().optional(),
    tx: zod.lazy((): z.ZodTypeAny => CdmRegulationTxSchema),
  })
);

export type CdmRegulationFinInstrmRptgTxRpt = z.infer<
  typeof CdmRegulationFinInstrmRptgTxRptSchema
>;
