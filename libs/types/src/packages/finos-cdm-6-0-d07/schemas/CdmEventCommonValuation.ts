import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonPriceTimingEnumSchema } from './CdmEventCommonPriceTimingEnum';
import { CdmEventCommonValuationSourceEnumSchema } from './CdmEventCommonValuationSourceEnum';
import { CdmEventCommonValuationTypeEnumSchema } from './CdmEventCommonValuationTypeEnum';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';
import { CdmObservableAssetPriceSchema } from './CdmObservableAssetPrice';

const zod = z as any;

export const CdmEventCommonValuationSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/Valuation']
)(
  zod.object({
    amount: zod.lazy(() => CdmObservableAssetMoneySchema),
    delta: zod.number().optional(),
    description: zod.string().optional(),
    method: zod.lazy(() => CdmEventCommonValuationTypeEnumSchema).optional(),
    name: zod.string().optional(),
    priceComponent: zod.lazy(() => CdmObservableAssetPriceSchema).optional(),
    source: zod.lazy(() => CdmEventCommonValuationSourceEnumSchema).optional(),
    timestamp: zod.string(),
    valuationTiming: zod
      .lazy(() => CdmEventCommonPriceTimingEnumSchema)
      .optional(),
  })
);

export type CdmEventCommonValuation = z.infer<
  typeof CdmEventCommonValuationSchema
>;
