import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonAssetClassEnumSchema } from './CdmBaseStaticdataAssetCommonAssetClassEnum';
import { CdmBaseStaticdataAssetCommonAssetIdentifierSchema } from './CdmBaseStaticdataAssetCommonAssetIdentifier';
import { CdmBaseStaticdataAssetCommonTaxonomySchema } from './CdmBaseStaticdataAssetCommonTaxonomy';
import { CdmBaseStaticdataPartyLegalEntitySchema } from './CdmBaseStaticdataPartyLegalEntity';
import { CdmProductAssetCreditSeniorityEnumSchema } from './CdmProductAssetCreditSeniorityEnum';
import { CdmProductAssetFieldWithMetaIndexAnnexSourceEnumSchema } from './CdmProductAssetFieldWithMetaIndexAnnexSourceEnum';
import { CdmProductAssetReferenceInformationSchema } from './CdmProductAssetReferenceInformation';
import { CdmProductAssetSettledEntityMatrixSchema } from './CdmProductAssetSettledEntityMatrix';
import { CdmProductAssetTrancheSchema } from './CdmProductAssetTranche';

export const CdmObservableAssetCreditIndexSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/CreditIndex']
)(
  z.object({
    assetClass: z
      .lazy(() => CdmBaseStaticdataAssetCommonAssetClassEnumSchema)
      .optional(),
    description: z.string().optional(),
    exchange: z.lazy(() => CdmBaseStaticdataPartyLegalEntitySchema).optional(),
    excludedReferenceEntity: z
      .array(z.lazy(() => CdmProductAssetReferenceInformationSchema))
      .min(0)
      .optional(),
    identifier: z
      .array(z.lazy(() => CdmBaseStaticdataAssetCommonAssetIdentifierSchema))
      .min(1)
      .optional(),
    indexAnnexDate: z.string().optional(),
    indexAnnexSource: z
      .lazy(() => CdmProductAssetFieldWithMetaIndexAnnexSourceEnumSchema)
      .optional(),
    indexAnnexVersion: z.number().optional(),
    indexFactor: z.number().optional(),
    indexSeries: z.number().optional(),
    isExchangeListed: z.boolean().optional(),
    name: z.string().optional(),
    provider: z.lazy(() => CdmBaseStaticdataPartyLegalEntitySchema).optional(),
    relatedExchange: z
      .array(z.lazy(() => CdmBaseStaticdataPartyLegalEntitySchema))
      .min(0)
      .optional(),
    seniority: z
      .lazy(() => CdmProductAssetCreditSeniorityEnumSchema)
      .optional(),
    settledEntityMatrix: z
      .lazy(() => CdmProductAssetSettledEntityMatrixSchema)
      .optional(),
    taxonomy: z
      .array(z.lazy(() => CdmBaseStaticdataAssetCommonTaxonomySchema))
      .min(0)
      .optional(),
    tranche: z.lazy(() => CdmProductAssetTrancheSchema).optional(),
  })
);

export type CdmObservableAssetCreditIndex = z.infer<
  typeof CdmObservableAssetCreditIndexSchema
>;
