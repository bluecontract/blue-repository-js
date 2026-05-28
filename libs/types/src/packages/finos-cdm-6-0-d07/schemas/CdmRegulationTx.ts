import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmRegulationNewSchema } from './CdmRegulationNew';
import { CdmRegulationPricSchema } from './CdmRegulationPric';
import { CdmRegulationQtySchema } from './CdmRegulationQty';

export const CdmRegulationTxSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/Tx']
)(
  z.object({
    ctryOfBrnch: z.string(),
    name: z.string().optional(),
    newTx: z.lazy((): z.ZodTypeAny => CdmRegulationNewSchema),
    pric: z.lazy((): z.ZodTypeAny => CdmRegulationPricSchema),
    qty: z.lazy((): z.ZodTypeAny => CdmRegulationQtySchema),
    tradDt: z.string(),
    tradgCpcty: z.string(),
    tradVn: z.string(),
  })
);

export type CdmRegulationTx = z.infer<typeof CdmRegulationTxSchema>;
