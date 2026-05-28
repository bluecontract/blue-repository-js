import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonAssetIdentifierSchema } from './CdmBaseStaticdataAssetCommonAssetIdentifier';
import { CdmBaseStaticdataAssetCommonTaxonomySchema } from './CdmBaseStaticdataAssetCommonTaxonomy';
import { CdmBaseStaticdataPartyLegalEntitySchema } from './CdmBaseStaticdataPartyLegalEntity';

export const CdmBaseStaticdataAssetCommonCashSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/Cash']
  )(
    z.object({
      description: z.string().optional(),
      exchange: z
        .lazy(() => CdmBaseStaticdataPartyLegalEntitySchema)
        .optional(),
      identifier: z
        .array(z.lazy(() => CdmBaseStaticdataAssetCommonAssetIdentifierSchema))
        .min(1)
        .optional(),
      isExchangeListed: z.boolean().optional(),
      name: z.string().optional(),
      relatedExchange: z
        .array(z.lazy(() => CdmBaseStaticdataPartyLegalEntitySchema))
        .min(0)
        .optional(),
      taxonomy: z
        .array(z.lazy(() => CdmBaseStaticdataAssetCommonTaxonomySchema))
        .min(0)
        .optional(),
    })
  );

export type CdmBaseStaticdataAssetCommonCash = z.infer<
  typeof CdmBaseStaticdataAssetCommonCashSchema
>;
