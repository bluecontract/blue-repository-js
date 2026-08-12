import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmRegulationFinInstrmRptgTxRptSchema } from './CdmRegulationFinInstrmRptgTxRpt';

const zod = z as any;

export const CdmRegulationDocumentSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/Document']
)(
  zod.object({
    finInstrmRptgTxRpt: zod.lazy(() => CdmRegulationFinInstrmRptgTxRptSchema),
    name: zod.string().optional(),
  })
);

export type CdmRegulationDocument = z.infer<typeof CdmRegulationDocumentSchema>;
