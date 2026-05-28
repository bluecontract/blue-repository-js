import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmRegulationFinInstrmRptgTxRptSchema } from './CdmRegulationFinInstrmRptgTxRpt';

export const CdmRegulationDocumentSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/Document']
)(
  z.object({
    finInstrmRptgTxRpt: z.lazy(() => CdmRegulationFinInstrmRptgTxRptSchema),
    name: z.string().optional(),
  })
);

export type CdmRegulationDocument = z.infer<typeof CdmRegulationDocumentSchema>;
