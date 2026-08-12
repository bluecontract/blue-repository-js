import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonAssetIdentifierSchema } from './CdmBaseStaticdataAssetCommonAssetIdentifier';
import { CdmBaseStaticdataAssetCommonInstrumentTypeEnumSchema } from './CdmBaseStaticdataAssetCommonInstrumentTypeEnum';
import { CdmBaseStaticdataAssetCommonTaxonomySchema } from './CdmBaseStaticdataAssetCommonTaxonomy';
import { CdmBaseStaticdataPartyLegalEntitySchema } from './CdmBaseStaticdataPartyLegalEntity';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

const zod = z as any;

export const CdmBaseStaticdataAssetCommonLoanSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/Loan']
)(
  zod.object({
    borrower: zod
      .array(zod.lazy(() => CdmBaseStaticdataPartyLegalEntitySchema))
      .min(0)
      .optional(),
    creditAgreementDate: zod.string().optional(),
    description: zod.string().optional(),
    exchange: zod
      .lazy(() => CdmBaseStaticdataPartyLegalEntitySchema)
      .optional(),
    facilityType: zod
      .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
      .optional(),
    identifier: zod
      .array(zod.lazy(() => CdmBaseStaticdataAssetCommonAssetIdentifierSchema))
      .min(1)
      .optional(),
    instrumentType: zod
      .lazy(() => CdmBaseStaticdataAssetCommonInstrumentTypeEnumSchema)
      .optional(),
    isExchangeListed: zod.boolean().optional(),
    lien: zod.lazy(() => ComRosettaModelFieldWithMetaStringSchema).optional(),
    name: zod.string().optional(),
    relatedExchange: zod
      .array(zod.lazy(() => CdmBaseStaticdataPartyLegalEntitySchema))
      .min(0)
      .optional(),
    taxonomy: zod
      .array(zod.lazy(() => CdmBaseStaticdataAssetCommonTaxonomySchema))
      .min(0)
      .optional(),
    tranche: zod
      .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
      .optional(),
  })
);

export type CdmBaseStaticdataAssetCommonLoan = z.infer<
  typeof CdmBaseStaticdataAssetCommonLoanSchema
>;
