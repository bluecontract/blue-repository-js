import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonAssetIdentifierSchema } from './CdmBaseStaticdataAssetCommonAssetIdentifier';
import { CdmBaseStaticdataAssetCommonInstrumentTypeEnumSchema } from './CdmBaseStaticdataAssetCommonInstrumentTypeEnum';
import { CdmBaseStaticdataAssetCommonPutCallEnumSchema } from './CdmBaseStaticdataAssetCommonPutCallEnum';
import { CdmBaseStaticdataAssetCommonTaxonomySchema } from './CdmBaseStaticdataAssetCommonTaxonomy';
import { CdmBaseStaticdataPartyLegalEntitySchema } from './CdmBaseStaticdataPartyLegalEntity';

export const CdmBaseStaticdataAssetCommonListedDerivativeSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/ListedDerivative'
    ]
  )(
    z.object({
      deliveryTerm: z.string().optional(),
      description: z.string().optional(),
      exchange: z
        .lazy(() => CdmBaseStaticdataPartyLegalEntitySchema)
        .optional(),
      identifier: z
        .array(z.lazy(() => CdmBaseStaticdataAssetCommonAssetIdentifierSchema))
        .min(1)
        .optional(),
      instrumentType: z
        .lazy(() => CdmBaseStaticdataAssetCommonInstrumentTypeEnumSchema)
        .optional(),
      isExchangeListed: z.boolean().optional(),
      name: z.string().optional(),
      optionType: z
        .lazy(() => CdmBaseStaticdataAssetCommonPutCallEnumSchema)
        .optional(),
      relatedExchange: z
        .array(z.lazy(() => CdmBaseStaticdataPartyLegalEntitySchema))
        .min(0)
        .optional(),
      strike: z.number().optional(),
      taxonomy: z
        .array(z.lazy(() => CdmBaseStaticdataAssetCommonTaxonomySchema))
        .min(0)
        .optional(),
    })
  );

export type CdmBaseStaticdataAssetCommonListedDerivative = z.infer<
  typeof CdmBaseStaticdataAssetCommonListedDerivativeSchema
>;
