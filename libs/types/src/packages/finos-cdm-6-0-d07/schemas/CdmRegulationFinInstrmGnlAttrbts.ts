import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmRegulationFinInstrmGnlAttrbtsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/regulation/FinInstrmGnlAttrbts']
  )(
    z.object({
      clssfctnTp: z.string(),
      fullNm: z.string(),
      name: z.string().optional(),
      ntnlCcy: z.string(),
    })
  );

export type CdmRegulationFinInstrmGnlAttrbts = z.infer<
  typeof CdmRegulationFinInstrmGnlAttrbtsSchema
>;
