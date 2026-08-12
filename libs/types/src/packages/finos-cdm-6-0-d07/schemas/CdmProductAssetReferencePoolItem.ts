import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductAssetMetafieldsReferenceWithMetaProtectionTermsSchema } from './CdmProductAssetMetafieldsReferenceWithMetaProtectionTerms';
import { CdmProductAssetReferencePairSchema } from './CdmProductAssetReferencePair';
import { CdmProductCommonSettlementMetafieldsReferenceWithMetaCashSettlementTermsSchema } from './CdmProductCommonSettlementMetafieldsReferenceWithMetaCashSettlementTerms';
import { CdmProductCommonSettlementMetafieldsReferenceWithMetaPhysicalSettlementTermsSchema } from './CdmProductCommonSettlementMetafieldsReferenceWithMetaPhysicalSettlementTerms';
import { CdmProductTemplateConstituentWeightSchema } from './CdmProductTemplateConstituentWeight';

const zod = z as any;

export const CdmProductAssetReferencePoolItemSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/ReferencePoolItem']
)(
  zod.object({
    cashSettlementTermsReference: zod
      .lazy(
        () =>
          CdmProductCommonSettlementMetafieldsReferenceWithMetaCashSettlementTermsSchema
      )
      .optional(),
    constituentWeight: zod
      .lazy(() => CdmProductTemplateConstituentWeightSchema)
      .optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    physicalSettlementTermsReference: zod
      .lazy(
        () =>
          CdmProductCommonSettlementMetafieldsReferenceWithMetaPhysicalSettlementTermsSchema
      )
      .optional(),
    protectionTermsReference: zod
      .lazy(
        () => CdmProductAssetMetafieldsReferenceWithMetaProtectionTermsSchema
      )
      .optional(),
    referencePair: zod.lazy(() => CdmProductAssetReferencePairSchema),
  })
);

export type CdmProductAssetReferencePoolItem = z.infer<
  typeof CdmProductAssetReferencePoolItemSchema
>;
