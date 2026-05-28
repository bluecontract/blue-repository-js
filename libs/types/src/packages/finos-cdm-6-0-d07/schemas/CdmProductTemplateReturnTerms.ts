import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductAssetCorrelationReturnTermsSchema } from './CdmProductAssetCorrelationReturnTerms';
import { CdmProductAssetDividendReturnTermsSchema } from './CdmProductAssetDividendReturnTerms';
import { CdmProductAssetPriceReturnTermsSchema } from './CdmProductAssetPriceReturnTerms';
import { CdmProductAssetVarianceReturnTermsSchema } from './CdmProductAssetVarianceReturnTerms';
import { CdmProductAssetVolatilityReturnTermsSchema } from './CdmProductAssetVolatilityReturnTerms';

export const CdmProductTemplateReturnTermsSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/ReturnTerms']
)(
  z.object({
    correlationReturnTerms: z
      .lazy(() => CdmProductAssetCorrelationReturnTermsSchema)
      .optional(),
    description: z.string().optional(),
    dividendReturnTerms: z
      .lazy(() => CdmProductAssetDividendReturnTermsSchema)
      .optional(),
    name: z.string().optional(),
    priceReturnTerms: z
      .lazy(() => CdmProductAssetPriceReturnTermsSchema)
      .optional(),
    varianceReturnTerms: z
      .lazy(() => CdmProductAssetVarianceReturnTermsSchema)
      .optional(),
    volatilityReturnTerms: z
      .lazy(() => CdmProductAssetVolatilityReturnTermsSchema)
      .optional(),
  })
);

export type CdmProductTemplateReturnTerms = z.infer<
  typeof CdmProductTemplateReturnTermsSchema
>;
