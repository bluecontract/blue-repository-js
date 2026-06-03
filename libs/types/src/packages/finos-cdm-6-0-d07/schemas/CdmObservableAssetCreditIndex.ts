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

const zod = z as any;

export const CdmObservableAssetCreditIndexSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/CreditIndex']
)(
  zod.object({
    assetClass: zod
      .lazy(() => CdmBaseStaticdataAssetCommonAssetClassEnumSchema)
      .optional(),
    description: zod.string().optional(),
    exchange: zod
      .lazy(() => CdmBaseStaticdataPartyLegalEntitySchema)
      .optional(),
    excludedReferenceEntity: zod
      .array(zod.lazy(() => CdmProductAssetReferenceInformationSchema))
      .min(0)
      .optional(),
    identifier: zod
      .array(zod.lazy(() => CdmBaseStaticdataAssetCommonAssetIdentifierSchema))
      .min(1)
      .optional(),
    indexAnnexDate: zod.string().optional(),
    indexAnnexSource: zod
      .lazy(() => CdmProductAssetFieldWithMetaIndexAnnexSourceEnumSchema)
      .optional(),
    indexAnnexVersion: zod.number().optional(),
    indexFactor: zod.number().optional(),
    indexSeries: zod.number().optional(),
    isExchangeListed: zod.boolean().optional(),
    name: zod.string().optional(),
    provider: zod
      .lazy(() => CdmBaseStaticdataPartyLegalEntitySchema)
      .optional(),
    relatedExchange: zod
      .array(zod.lazy(() => CdmBaseStaticdataPartyLegalEntitySchema))
      .min(0)
      .optional(),
    seniority: zod
      .lazy(() => CdmProductAssetCreditSeniorityEnumSchema)
      .optional(),
    settledEntityMatrix: zod
      .lazy(() => CdmProductAssetSettledEntityMatrixSchema)
      .optional(),
    taxonomy: zod
      .array(zod.lazy(() => CdmBaseStaticdataAssetCommonTaxonomySchema))
      .min(0)
      .optional(),
    tranche: zod.lazy(() => CdmProductAssetTrancheSchema).optional(),
  })
);

export type CdmObservableAssetCreditIndex = z.infer<
  typeof CdmObservableAssetCreditIndexSchema
>;
