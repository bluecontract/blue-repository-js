import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonAssetIdentifierSchema } from './CdmBaseStaticdataAssetCommonAssetIdentifier';
import { CdmBaseStaticdataAssetCommonDebtTypeSchema } from './CdmBaseStaticdataAssetCommonDebtType';
import { CdmBaseStaticdataAssetCommonEquityTypeEnumSchema } from './CdmBaseStaticdataAssetCommonEquityTypeEnum';
import { CdmBaseStaticdataAssetCommonFundProductTypeEnumSchema } from './CdmBaseStaticdataAssetCommonFundProductTypeEnum';
import { CdmBaseStaticdataAssetCommonInstrumentTypeEnumSchema } from './CdmBaseStaticdataAssetCommonInstrumentTypeEnum';
import { CdmBaseStaticdataAssetCommonTaxonomySchema } from './CdmBaseStaticdataAssetCommonTaxonomy';
import { CdmBaseStaticdataPartyLegalEntitySchema } from './CdmBaseStaticdataPartyLegalEntity';

const zod = z as any;

export const CdmBaseStaticdataAssetCommonSecuritySchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/Security']
)(
  zod.object({
    debtType: zod
      .lazy(() => CdmBaseStaticdataAssetCommonDebtTypeSchema)
      .optional(),
    description: zod.string().optional(),
    equityType: zod
      .lazy(() => CdmBaseStaticdataAssetCommonEquityTypeEnumSchema)
      .optional(),
    exchange: zod
      .lazy(() => CdmBaseStaticdataPartyLegalEntitySchema)
      .optional(),
    fundType: zod
      .lazy(() => CdmBaseStaticdataAssetCommonFundProductTypeEnumSchema)
      .optional(),
    identifier: zod
      .array(zod.lazy(() => CdmBaseStaticdataAssetCommonAssetIdentifierSchema))
      .min(1)
      .optional(),
    instrumentType: zod
      .lazy(() => CdmBaseStaticdataAssetCommonInstrumentTypeEnumSchema)
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

export type CdmBaseStaticdataAssetCommonSecurity = z.infer<
  typeof CdmBaseStaticdataAssetCommonSecuritySchema
>;
