import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonProductIdentifierSchema } from './CdmBaseStaticdataAssetCommonProductIdentifier';
import { CdmBaseStaticdataAssetCommonProductTaxonomySchema } from './CdmBaseStaticdataAssetCommonProductTaxonomy';
import { CdmProductTemplateEconomicTermsSchema } from './CdmProductTemplateEconomicTerms';

export const CdmProductTemplateNonTransferableProductSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/NonTransferableProduct']
  )(
    z.object({
      description: z.string().optional(),
      economicTerms: z.lazy(
        (): z.ZodTypeAny => CdmProductTemplateEconomicTermsSchema
      ),
      identifier: z
        .array(
          z.lazy(
            (): z.ZodTypeAny =>
              CdmBaseStaticdataAssetCommonProductIdentifierSchema
          )
        )
        .min(0)
        .optional(),
      name: z.string().optional(),
      taxonomy: z
        .array(
          z.lazy(
            (): z.ZodTypeAny =>
              CdmBaseStaticdataAssetCommonProductTaxonomySchema
          )
        )
        .min(0)
        .optional(),
    })
  );

export type CdmProductTemplateNonTransferableProduct = z.infer<
  typeof CdmProductTemplateNonTransferableProductSchema
>;
