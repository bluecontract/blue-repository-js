import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmRegulationAddtlAttrbtsSchema } from './CdmRegulationAddtlAttrbts';
import { CdmRegulationBuyrSchema } from './CdmRegulationBuyr';
import { CdmRegulationExctgPrsnSchema } from './CdmRegulationExctgPrsn';
import { CdmRegulationFinInstrmSchema } from './CdmRegulationFinInstrm';
import { CdmRegulationInvstmtDcsnPrsnSchema } from './CdmRegulationInvstmtDcsnPrsn';
import { CdmRegulationOrdrTrnsmssnSchema } from './CdmRegulationOrdrTrnsmssn';
import { CdmRegulationSellrSchema } from './CdmRegulationSellr';
import { CdmRegulationTxSchema } from './CdmRegulationTx';

const zod = z as any;

export const CdmRegulationNewSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/New']
)(
  zod.object({
    addtlAttrbts: zod.lazy((): z.ZodTypeAny => CdmRegulationAddtlAttrbtsSchema),
    buyr: zod.lazy((): z.ZodTypeAny => CdmRegulationBuyrSchema),
    exctgPrsn: zod.lazy((): z.ZodTypeAny => CdmRegulationExctgPrsnSchema),
    exctgPty: zod.string(),
    finInstrm: zod.lazy((): z.ZodTypeAny => CdmRegulationFinInstrmSchema),
    invstmtDcsnPrsn: zod.lazy(
      (): z.ZodTypeAny => CdmRegulationInvstmtDcsnPrsnSchema
    ),
    invstmtPtyInd: zod.string(),
    name: zod.string().optional(),
    ordrTrnsmssn: zod.lazy((): z.ZodTypeAny => CdmRegulationOrdrTrnsmssnSchema),
    sellr: zod.lazy((): z.ZodTypeAny => CdmRegulationSellrSchema),
    submitgPty: zod.string(),
    tx: zod.lazy((): z.ZodTypeAny => CdmRegulationTxSchema),
    txId: zod.string(),
  })
);

export type CdmRegulationNew = z.infer<typeof CdmRegulationNewSchema>;
