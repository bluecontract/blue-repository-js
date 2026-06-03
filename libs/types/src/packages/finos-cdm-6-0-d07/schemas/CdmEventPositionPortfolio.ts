import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventPositionAggregationParametersSchema } from './CdmEventPositionAggregationParameters';
import { CdmEventPositionPortfolioStateSchema } from './CdmEventPositionPortfolioState';

const zod = z as any;

export const CdmEventPositionPortfolioSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/position/Portfolio']
)(
  zod.object({
    aggregationParameters: zod.lazy(
      () => CdmEventPositionAggregationParametersSchema
    ),
    description: zod.string().optional(),
    name: zod.string().optional(),
    portfolioState: zod.lazy(() => CdmEventPositionPortfolioStateSchema),
  })
);

export type CdmEventPositionPortfolio = z.infer<
  typeof CdmEventPositionPortfolioSchema
>;
