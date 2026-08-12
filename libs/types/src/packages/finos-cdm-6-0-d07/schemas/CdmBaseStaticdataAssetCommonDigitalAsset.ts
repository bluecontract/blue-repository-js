import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonAssetIdentifierSchema } from './CdmBaseStaticdataAssetCommonAssetIdentifier';
import { CdmBaseStaticdataAssetCommonTaxonomySchema } from './CdmBaseStaticdataAssetCommonTaxonomy';
import { CdmBaseStaticdataPartyLegalEntitySchema } from './CdmBaseStaticdataPartyLegalEntity';

const zod = z as any;

export const CdmBaseStaticdataAssetCommonDigitalAssetSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/DigitalAsset']
  )(
    zod.object({
      description: zod.string().optional(),
      exchange: zod
        .lazy(() => CdmBaseStaticdataPartyLegalEntitySchema)
        .optional(),
      identifier: zod
        .array(
          zod.lazy(() => CdmBaseStaticdataAssetCommonAssetIdentifierSchema)
        )
        .min(1)
        .optional(),
      isExchangeListed: zod.boolean().optional(),
      name: zod.string().optional(),
      relatedExchange: zod
        .array(zod.lazy(() => CdmBaseStaticdataPartyLegalEntitySchema))
        .min(0)
        .optional(),
      taxonomy: zod
        .array(zod.lazy(() => CdmBaseStaticdataAssetCommonTaxonomySchema))
        .min(0)
        .optional(),
    })
  );

export type CdmBaseStaticdataAssetCommonDigitalAsset = z.infer<
  typeof CdmBaseStaticdataAssetCommonDigitalAssetSchema
>;
