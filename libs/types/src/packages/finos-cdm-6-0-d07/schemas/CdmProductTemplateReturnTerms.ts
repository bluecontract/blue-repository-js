import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductAssetCorrelationReturnTermsSchema } from './CdmProductAssetCorrelationReturnTerms';
import { CdmProductAssetDividendReturnTermsSchema } from './CdmProductAssetDividendReturnTerms';
import { CdmProductAssetPriceReturnTermsSchema } from './CdmProductAssetPriceReturnTerms';
import { CdmProductAssetVarianceReturnTermsSchema } from './CdmProductAssetVarianceReturnTerms';
import { CdmProductAssetVolatilityReturnTermsSchema } from './CdmProductAssetVolatilityReturnTerms';

const zod = z as any;

export const CdmProductTemplateReturnTermsSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/ReturnTerms']
)(
  zod.object({
    correlationReturnTerms: zod
      .lazy(() => CdmProductAssetCorrelationReturnTermsSchema)
      .optional(),
    description: zod.string().optional(),
    dividendReturnTerms: zod
      .lazy(() => CdmProductAssetDividendReturnTermsSchema)
      .optional(),
    name: zod.string().optional(),
    priceReturnTerms: zod
      .lazy(() => CdmProductAssetPriceReturnTermsSchema)
      .optional(),
    varianceReturnTerms: zod
      .lazy(() => CdmProductAssetVarianceReturnTermsSchema)
      .optional(),
    volatilityReturnTerms: zod
      .lazy(() => CdmProductAssetVolatilityReturnTermsSchema)
      .optional(),
  })
);

export type CdmProductTemplateReturnTerms = z.infer<
  typeof CdmProductTemplateReturnTermsSchema
>;
