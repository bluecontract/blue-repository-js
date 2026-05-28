import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventPositionMetafieldsReferenceWithMetaPortfolioStateSchema } from './CdmEventPositionMetafieldsReferenceWithMetaPortfolioState';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';

export const CdmEventCommonExposureSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/Exposure']
)(
  z.object({
    aggregateValue: z.lazy(() => CdmObservableAssetMoneySchema),
    calculationDateTime: z.string().optional(),
    description: z.string().optional(),
    name: z.string().optional(),
    tradePortfolio: z.lazy(
      () => CdmEventPositionMetafieldsReferenceWithMetaPortfolioStateSchema
    ),
    valuationDateTime: z.string(),
  })
);

export type CdmEventCommonExposure = z.infer<
  typeof CdmEventCommonExposureSchema
>;
