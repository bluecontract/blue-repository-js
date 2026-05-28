import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonLineageSchema } from './CdmEventCommonLineage';
import { CdmEventPositionPositionSchema } from './CdmEventPositionPosition';

export const CdmEventPositionPortfolioStateSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/position/PortfolioState']
  )(
    z.object({
      description: z.string().optional(),
      lineage: z.lazy(() => CdmEventCommonLineageSchema),
      name: z.string().optional(),
      positions: z
        .array(z.lazy(() => CdmEventPositionPositionSchema))
        .min(0)
        .optional(),
    })
  );

export type CdmEventPositionPortfolioState = z.infer<
  typeof CdmEventPositionPortfolioStateSchema
>;
