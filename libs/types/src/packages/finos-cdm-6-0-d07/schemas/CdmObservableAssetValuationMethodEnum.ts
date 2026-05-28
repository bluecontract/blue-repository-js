import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmObservableAssetValuationMethodEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/ValuationMethodEnum']
  )(
    z.enum([
      'AverageBlendedHighest',
      'AverageBlendedMarket',
      'AverageHighest',
      'AverageMarket',
      'BlendedHighest',
      'BlendedMarket',
      'Highest',
      'Market',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmObservableAssetValuationMethodEnum = z.infer<
  typeof CdmObservableAssetValuationMethodEnumSchema
>;
