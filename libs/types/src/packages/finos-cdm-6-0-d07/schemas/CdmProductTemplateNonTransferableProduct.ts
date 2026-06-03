import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonProductIdentifierSchema } from './CdmBaseStaticdataAssetCommonProductIdentifier';
import { CdmBaseStaticdataAssetCommonProductTaxonomySchema } from './CdmBaseStaticdataAssetCommonProductTaxonomy';
import { CdmProductTemplateEconomicTermsSchema } from './CdmProductTemplateEconomicTerms';

const zod = z as any;

export const CdmProductTemplateNonTransferableProductSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/NonTransferableProduct']
  )(
    zod.object({
      description: zod.string().optional(),
      economicTerms: zod.lazy(
        (): z.ZodTypeAny => CdmProductTemplateEconomicTermsSchema
      ),
      identifier: zod
        .array(
          zod.lazy(
            (): z.ZodTypeAny =>
              CdmBaseStaticdataAssetCommonProductIdentifierSchema
          )
        )
        .min(0)
        .optional(),
      name: zod.string().optional(),
      taxonomy: zod
        .array(
          zod.lazy(
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
