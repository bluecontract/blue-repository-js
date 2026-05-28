import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonAssetIdentifierSchema } from './CdmBaseStaticdataAssetCommonAssetIdentifier';
import { CdmBaseStaticdataAssetCommonInstrumentTypeEnumSchema } from './CdmBaseStaticdataAssetCommonInstrumentTypeEnum';
import { CdmBaseStaticdataAssetCommonTaxonomySchema } from './CdmBaseStaticdataAssetCommonTaxonomy';
import { CdmBaseStaticdataPartyLegalEntitySchema } from './CdmBaseStaticdataPartyLegalEntity';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmBaseStaticdataAssetCommonLoanSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/Loan']
  )(
    z.object({
      borrower: z
        .array(z.lazy(() => CdmBaseStaticdataPartyLegalEntitySchema))
        .min(0)
        .optional(),
      creditAgreementDate: z.string().optional(),
      description: z.string().optional(),
      exchange: z
        .lazy(() => CdmBaseStaticdataPartyLegalEntitySchema)
        .optional(),
      facilityType: z
        .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
        .optional(),
      identifier: z
        .array(z.lazy(() => CdmBaseStaticdataAssetCommonAssetIdentifierSchema))
        .min(1)
        .optional(),
      instrumentType: z
        .lazy(() => CdmBaseStaticdataAssetCommonInstrumentTypeEnumSchema)
        .optional(),
      isExchangeListed: z.boolean().optional(),
      lien: z.lazy(() => ComRosettaModelFieldWithMetaStringSchema).optional(),
      name: z.string().optional(),
      relatedExchange: z
        .array(z.lazy(() => CdmBaseStaticdataPartyLegalEntitySchema))
        .min(0)
        .optional(),
      taxonomy: z
        .array(z.lazy(() => CdmBaseStaticdataAssetCommonTaxonomySchema))
        .min(0)
        .optional(),
      tranche: z
        .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
        .optional(),
    })
  );

export type CdmBaseStaticdataAssetCommonLoan = z.infer<
  typeof CdmBaseStaticdataAssetCommonLoanSchema
>;
