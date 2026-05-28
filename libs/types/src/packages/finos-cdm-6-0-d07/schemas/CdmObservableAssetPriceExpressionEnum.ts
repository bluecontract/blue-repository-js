import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmObservableAssetPriceExpressionEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/PriceExpressionEnum']
  )(
    z.enum([
      'AbsoluteTerms',
      'ParValueFraction',
      'PerOption',
      'PercentageOfNotional',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmObservableAssetPriceExpressionEnum = z.infer<
  typeof CdmObservableAssetPriceExpressionEnumSchema
>;
