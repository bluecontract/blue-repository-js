import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmRegulationNewSchema } from './CdmRegulationNew';
import { CdmRegulationPricSchema } from './CdmRegulationPric';
import { CdmRegulationQtySchema } from './CdmRegulationQty';

const zod = z as any;

export const CdmRegulationTxSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/Tx']
)(
  zod.object({
    ctryOfBrnch: zod.string(),
    name: zod.string().optional(),
    newTx: zod.lazy((): z.ZodTypeAny => CdmRegulationNewSchema),
    pric: zod.lazy((): z.ZodTypeAny => CdmRegulationPricSchema),
    qty: zod.lazy((): z.ZodTypeAny => CdmRegulationQtySchema),
    tradDt: zod.string(),
    tradgCpcty: zod.string(),
    tradVn: zod.string(),
  })
);

export type CdmRegulationTx = z.infer<typeof CdmRegulationTxSchema>;
