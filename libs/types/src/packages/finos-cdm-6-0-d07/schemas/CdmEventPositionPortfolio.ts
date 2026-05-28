import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventPositionAggregationParametersSchema } from './CdmEventPositionAggregationParameters';
import { CdmEventPositionPortfolioStateSchema } from './CdmEventPositionPortfolioState';

export const CdmEventPositionPortfolioSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/position/Portfolio']
)(
  z.object({
    aggregationParameters: z.lazy(
      () => CdmEventPositionAggregationParametersSchema
    ),
    description: z.string().optional(),
    name: z.string().optional(),
    portfolioState: z.lazy(() => CdmEventPositionPortfolioStateSchema),
  })
);

export type CdmEventPositionPortfolio = z.infer<
  typeof CdmEventPositionPortfolioSchema
>;
