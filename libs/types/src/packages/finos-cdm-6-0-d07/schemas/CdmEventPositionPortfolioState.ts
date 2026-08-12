import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonLineageSchema } from './CdmEventCommonLineage';
import { CdmEventPositionPositionSchema } from './CdmEventPositionPosition';

const zod = z as any;

export const CdmEventPositionPortfolioStateSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/position/PortfolioState']
)(
  zod.object({
    description: zod.string().optional(),
    lineage: zod.lazy(() => CdmEventCommonLineageSchema),
    name: zod.string().optional(),
    positions: zod
      .array(zod.lazy(() => CdmEventPositionPositionSchema))
      .min(0)
      .optional(),
  })
);

export type CdmEventPositionPortfolioState = z.infer<
  typeof CdmEventPositionPortfolioStateSchema
>;
