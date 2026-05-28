import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmObservableAssetQuotationSideEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/QuotationSideEnum']
  )(
    z.enum([
      'Afternoon',
      'Ask',
      'Bid',
      'Closing',
      'High',
      'Index',
      'LocationalMarginal',
      'Low',
      'MarginalHourly',
      'MarketClearing',
      'MeanOfBidAndAsk',
      'MeanOfHighAndLow',
      'Mid',
      'Morning',
      'NationalSingle',
      'OSP',
      'Official',
      'Opening',
      'Settlement',
      'Spot',
      'UnWeightedAverage',
      'WeightedAverage',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmObservableAssetQuotationSideEnum = z.infer<
  typeof CdmObservableAssetQuotationSideEnumSchema
>;
