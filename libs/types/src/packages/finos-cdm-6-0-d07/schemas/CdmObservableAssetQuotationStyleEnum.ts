import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmObservableAssetQuotationStyleEnumSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/QuotationStyleEnum']
)(
  zod.enum(['PointsUpFront', 'Price', 'TradedSpread'] as [
    string,
    ...string[]
  ]) as unknown as z.ZodObject<any>
);

export type CdmObservableAssetQuotationStyleEnum = z.infer<
  typeof CdmObservableAssetQuotationStyleEnumSchema
>;
