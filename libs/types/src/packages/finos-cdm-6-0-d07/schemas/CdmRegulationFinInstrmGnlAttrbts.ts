import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmRegulationFinInstrmGnlAttrbtsSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/regulation/FinInstrmGnlAttrbts']
)(
  zod.object({
    clssfctnTp: zod.string(),
    fullNm: zod.string(),
    name: zod.string().optional(),
    ntnlCcy: zod.string(),
  })
);

export type CdmRegulationFinInstrmGnlAttrbts = z.infer<
  typeof CdmRegulationFinInstrmGnlAttrbtsSchema
>;
