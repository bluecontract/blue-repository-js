import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventPositionMetafieldsReferenceWithMetaPortfolioStateSchema } from './CdmEventPositionMetafieldsReferenceWithMetaPortfolioState';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';

const zod = z as any;

export const CdmEventCommonExposureSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/Exposure']
)(
  zod.object({
    aggregateValue: zod.lazy(() => CdmObservableAssetMoneySchema),
    calculationDateTime: zod.string().optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    tradePortfolio: zod.lazy(
      () => CdmEventPositionMetafieldsReferenceWithMetaPortfolioStateSchema
    ),
    valuationDateTime: zod.string(),
  })
);

export type CdmEventCommonExposure = z.infer<
  typeof CdmEventCommonExposureSchema
>;
