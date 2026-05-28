import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmRegulationTxSchema } from './CdmRegulationTx';

export const CdmRegulationFinInstrmRptgTxRptSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/regulation/FinInstrmRptgTxRpt']
  )(
    z.object({
      name: z.string().optional(),
      tx: z.lazy((): z.ZodTypeAny => CdmRegulationTxSchema),
    })
  );

export type CdmRegulationFinInstrmRptgTxRpt = z.infer<
  typeof CdmRegulationFinInstrmRptgTxRptSchema
>;
