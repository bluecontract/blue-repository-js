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

export const CdmRegulationNewSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/New']
)(
  z.object({
    addtlAttrbts: z.lazy((): z.ZodTypeAny => CdmRegulationAddtlAttrbtsSchema),
    buyr: z.lazy((): z.ZodTypeAny => CdmRegulationBuyrSchema),
    exctgPrsn: z.lazy((): z.ZodTypeAny => CdmRegulationExctgPrsnSchema),
    exctgPty: z.string(),
    finInstrm: z.lazy((): z.ZodTypeAny => CdmRegulationFinInstrmSchema),
    invstmtDcsnPrsn: z.lazy(
      (): z.ZodTypeAny => CdmRegulationInvstmtDcsnPrsnSchema
    ),
    invstmtPtyInd: z.string(),
    name: z.string().optional(),
    ordrTrnsmssn: z.lazy((): z.ZodTypeAny => CdmRegulationOrdrTrnsmssnSchema),
    sellr: z.lazy((): z.ZodTypeAny => CdmRegulationSellrSchema),
    submitgPty: z.string(),
    tx: z.lazy((): z.ZodTypeAny => CdmRegulationTxSchema),
    txId: z.string(),
  })
);

export type CdmRegulationNew = z.infer<typeof CdmRegulationNewSchema>;
