import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmObservableAssetQuotationStyleEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/QuotationStyleEnum']
  )(
    z.enum(['PointsUpFront', 'Price', 'TradedSpread'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmObservableAssetQuotationStyleEnum = z.infer<
  typeof CdmObservableAssetQuotationStyleEnumSchema
>;
