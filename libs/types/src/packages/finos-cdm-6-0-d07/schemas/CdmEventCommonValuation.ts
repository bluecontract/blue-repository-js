import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonPriceTimingEnumSchema } from './CdmEventCommonPriceTimingEnum';
import { CdmEventCommonValuationSourceEnumSchema } from './CdmEventCommonValuationSourceEnum';
import { CdmEventCommonValuationTypeEnumSchema } from './CdmEventCommonValuationTypeEnum';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';
import { CdmObservableAssetPriceSchema } from './CdmObservableAssetPrice';

export const CdmEventCommonValuationSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/Valuation']
)(
  z.object({
    amount: z.lazy(() => CdmObservableAssetMoneySchema),
    delta: z.number().optional(),
    description: z.string().optional(),
    method: z.lazy(() => CdmEventCommonValuationTypeEnumSchema).optional(),
    name: z.string().optional(),
    priceComponent: z.lazy(() => CdmObservableAssetPriceSchema).optional(),
    source: z.lazy(() => CdmEventCommonValuationSourceEnumSchema).optional(),
    timestamp: z.string(),
    valuationTiming: z
      .lazy(() => CdmEventCommonPriceTimingEnumSchema)
      .optional(),
  })
);

export type CdmEventCommonValuation = z.infer<
  typeof CdmEventCommonValuationSchema
>;
